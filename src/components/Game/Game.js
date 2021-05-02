import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Loader from '../../common/components/Loader';
import * as GAME from '../../common/constants/game';
import * as ROUTES from '../../common/constants/routes';
import { useFirebase } from '../../services/firebase';
import GameOverScreen from './components/GameOverScreen';
import Layout from './components/Layout';
import MoveScreen from './components/MoveScreen';
import ReadyScreen from './components/ReadyScreen';
import ResultScreen from './components/ResultScreen';
import UserStats from './components/UserStats';
import WaitScreen from './components/WaitScreen';

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [isHost, setHost] = useState(false);
  const [isReady, setReady] = useState(false);
  const [hasMadeMove, setMove] = useState(false);

  const { id } = useParams();
  const history = useHistory();
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  // onJoin - Setups on game listener for updating from firebase
  const onJoin = useCallback(() => {
    const listener = firebaseRef.current
      .getGame(id)
      .onSnapshot(async (snapshot) => {
        const gameData = snapshot.data();

        // if game does not exist, bounce to home
        if (!gameData) {
          history.push(ROUTES.LANDING);
          return;
        }

        // assign user roles (host or challenger)
        if (gameData.host.id === firebaseRef.current.user.id) {
          // determine if current user is the host
          setHost(true);
        } else if (!gameData.challenger) {
          // if no challenger, set this user as challenger
          firebaseRef.current.getGame(id).update({
            challenger: firebaseRef.current.user,
          });
        } else if (
          gameData.challenger &&
          gameData.challenger.id !== firebaseRef.current.user.id
        ) {
          // if challenger already exists
          history.push(ROUTES.GAMES);
        }

        // if challenger left mid game, re-initialize host
        if (gameData.state === GAME.STATE_MATCHMAKING && !gameData.challenger) {
          setReady(false);
          setMove(false);
        }

        // check if two players are present
        if (
          gameData.state === GAME.STATE_MATCHMAKING &&
          gameData.host &&
          gameData.challenger
        ) {
          firebaseRef.current.getGame(id).update({
            state: GAME.STATE_READY_UP,
          });
        }

        // check if both players are ready
        if (
          gameData.state === GAME.STATE_READY_UP &&
          gameData.hostReady &&
          gameData.challengerReady
        ) {
          firebaseRef.current.getGame(id).update({
            state: GAME.STATE_MAKE_MOVE,
          });

          setMove(false);
        }

        // check player moves
        if (
          gameData.state === GAME.STATE_MAKE_MOVE &&
          gameData.hostMove &&
          gameData.challengerMove
        ) {
          let hostScore = gameData.hostScore;
          let challengerScore = gameData.challengerScore;
          let roundResult = null;

          if (gameData.hostMove === gameData.challengerMove) {
            // same moves result in a draw
            roundResult = GAME.RESULT_DRAW;
          } else if (
            (gameData.hostMove === GAME.MOVE_ROCK &&
              gameData.challengerMove === GAME.MOVE_SCISSOR) ||
            (gameData.hostMove === GAME.MOVE_PAPER &&
              gameData.challengerMove === GAME.MOVE_ROCK) ||
            (gameData.hostMove === GAME.MOVE_SCISSOR &&
              gameData.challengerMove === GAME.MOVE_PAPER)
          ) {
            // host wins
            hostScore++;
            roundResult = GAME.RESULT_HOST_WIN;
          } else {
            challengerScore++;
            roundResult = GAME.RESULT_CHALLENGER_WIN;
          }

          // check if game over state
          if (hostScore === 3 || challengerScore === 3) {
            // update user win/loss statistics
            if (hostScore === 3) {
              const updatedHostWins = gameData.host.wins + 1;
              const updatedChallengerLosses = gameData.challenger.losses + 1;

              firebaseRef.current.getUser(gameData.host.id).update({
                wins: updatedHostWins,
              });

              firebaseRef.current.getUser(gameData.challenger.id).update({
                losses: updatedChallengerLosses,
              });
            } else {
              const updatedHostLosses = gameData.host.losses + 1;
              const updatedChallengerWins = gameData.challenger.wins + 1;

              firebaseRef.current.getUser(gameData.host.id).update({
                losses: updatedHostLosses,
              });

              firebaseRef.current.getUser(gameData.challenger.id).update({
                wins: updatedChallengerWins,
              });
            }

            // update to game over state
            const updatedHost = await firebaseRef.current
              .getUser(gameData.host.id)
              .get();
            const updatedHostData = updatedHost.data();

            const updatedChallenger = await firebaseRef.current
              .getUser(gameData.challenger.id)
              .get();
            const updatedChallengerData = updatedChallenger.data();

            firebaseRef.current.getGame(id).update({
              state: GAME.STATE_GAME_OVER,
              roundResult: roundResult,
              host: updatedHostData,
              hostReady: false,
              hostScore: hostScore,
              challenger: updatedChallengerData,
              challengerReady: false,
              challengerScore: challengerScore,
            });
          } else {
            // update to round result state
            firebaseRef.current.getGame(id).update({
              state: GAME.STATE_ROUND_RESULT,
              roundResult: roundResult,
              hostReady: false,
              hostScore: hostScore,
              challengerReady: false,
              challengerScore: challengerScore,
            });
          }

          setReady(false);
        }

        // move to next round
        if (
          gameData.state === GAME.STATE_ROUND_RESULT &&
          gameData.hostReady &&
          gameData.challengerReady
        ) {
          const nextRound = gameData.round + 1;

          firebaseRef.current.getGame(id).update({
            state: GAME.STATE_MAKE_MOVE,
            round: nextRound,
            roundResult: null,
            hostMove: null,
            challengerMove: null,
          });

          setMove(false);
        }

        // move to rematch
        if (
          gameData.state === GAME.STATE_GAME_OVER &&
          gameData.hostReady &&
          gameData.challengerReady
        ) {
          firebaseRef.current.getGame(id).update({
            state: GAME.STATE_MAKE_MOVE,
            round: 1,
            roundResult: null,
            hostMove: null,
            hostScore: 0,
            challengerMove: null,
            challengerScore: 0,
          });

          setMove(false);
        }

        setGame(gameData);
        setLoading(false);
      });

    return listener;
  }, [id, history]);

  // onLeave - cleans up firebase state depending on game role
  const onLeave = useCallback(() => {
    if (isHost) {
      // if host, delete the game room
      firebaseRef.current.getGame(id).delete();
    }

    if (!isHost) {
      // if challenger, set room into matchmaking mode
      firebaseRef.current.getGame(id).update({
        challenger: null,
        state: GAME.STATE_MATCHMAKING,
        round: 1,
        hostReady: false,
        hostMove: null,
        hostScore: 0,
        challengerReady: false,
        challengerMove: null,
        challengerScore: 0,
      });
    }
  }, [id, isHost]);

  // on page render, initialize the game
  useEffect(() => {
    const unsubscribe = onJoin();

    return () => {
      unsubscribe(); // unsubscribe to listener
      onLeave(); // clean up the room
    };
  }, [onJoin, onLeave]);

  // set this user to ready up
  const handleReadyUp = useCallback(async () => {
    if (isHost) {
      await firebaseRef.current.getGame(id).update({
        hostReady: true,
      });
    } else {
      await firebaseRef.current.getGame(id).update({
        challengerReady: true,
      });
    }

    setReady(true);
  }, [id, isHost]);

  // set user move
  const handleMove = useCallback(
    async (move) => {
      if (isHost) {
        await firebaseRef.current.getGame(id).update({
          hostMove: move,
        });
      } else {
        await firebaseRef.current.getGame(id).update({
          challengerMove: move,
        });
      }

      setMove(true);
    },
    [id, isHost],
  );

  // leave match
  const handleLeave = useCallback(() => {
    history.push(ROUTES.HOME);
  }, [history]);

  if (loading) {
    return <Loader />;
  }

  // set game state view
  let gameState = null;
  switch (game.state) {
    case GAME.STATE_MATCHMAKING:
      gameState = <WaitScreen id={id} />;
      break;
    case GAME.STATE_READY_UP:
      gameState = (
        <ReadyScreen isReady={isReady} handleReadyUp={handleReadyUp} />
      );
      break;
    case GAME.STATE_MAKE_MOVE:
      gameState = (
        <MoveScreen
          round={game.round}
          hostScore={game.hostScore}
          challengerScore={game.challengerScore}
          hasMadeMove={hasMadeMove}
          handleMove={handleMove}
        />
      );
      break;
    case GAME.STATE_ROUND_RESULT:
      gameState = (
        <ResultScreen
          round={game.round}
          roundResult={game.roundResult}
          hostScore={game.hostScore}
          challengerScore={game.challengerScore}
          hostMove={game.hostMove}
          challengerMove={game.challengerMove}
          isHost={isHost}
          isReady={isReady}
          handleReadyUp={handleReadyUp}
        />
      );
      break;
    case GAME.STATE_GAME_OVER:
      gameState = (
        <GameOverScreen
          round={game.round}
          roundResult={game.roundResult}
          hostScore={game.hostScore}
          challengerScore={game.challengerScore}
          isHost={isHost}
          isReady={isReady}
          handleReadyUp={handleReadyUp}
          handleLeave={handleLeave}
        />
      );
      break;
    default:
      gameState = null;
  }

  return (
    <Layout>
      <UserStats
        host={game.host}
        challenger={game.challenger}
        isHost={isHost}
      />
      {gameState}
    </Layout>
  );
};

export default Game;
