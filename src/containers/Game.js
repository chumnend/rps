import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import GameScoreboard from '../components/GameScoreboard';
import GameUserStats from '../components/GameUserStats';
import Loader from '../components/Loader';
import Page from '../components/Page';
import * as ROUTES from '../constants/routes';
import { useAuth } from '../store/auth';
import { useFirebase } from '../store/firebase';

export const STATE = {
  MATCHMAKING: 'matchmaking',
  READY_UP: 'ready_up',
  MAKE_MOVE: 'make_move',
  ROUND_RESULT: 'round_result',
  GAME_OVER: 'game_over',
};

export const MOVE = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSOR: 'scissor',
};

export const RESULT = {
  HOST_WIN: 'host_win',
  CHALLENGER_WIN: 'challenger_win',
  DRAW: 'draw',
};

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [isHost, setHost] = useState(false);
  const [isReady, setReady] = useState(false);
  const [moveMade, setMove] = useState(false);

  const { id } = useParams();
  const history = useHistory();
  const auth = useAuth();
  const authRef = useRef(auth);
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  // onJoin - Setups on game listener for updating from firebase
  const onJoin = useCallback(() => {
    const listener = firebaseRef.current
      .game(id)
      .onSnapshot(async (snapshot) => {
        const gameData = snapshot.data();

        // if game does not exist, bounce to home
        if (!gameData) {
          history.push(ROUTES.LANDING);
          return;
        }

        // assign user roles (host or challenger)
        if (gameData.host.id === authRef.current.user.id) {
          // determine if current user is the host
          setHost(true);
        } else if (!gameData.challenger) {
          // if no challenger, set this user as challenger
          firebaseRef.current.game(id).update({
            challenger: authRef.current.user,
          });
        } else if (
          gameData.challenger &&
          gameData.challenger.id !== authRef.current.user.id
        ) {
          // if challenger already exists
          history.push(ROUTES.GAMES);
        }

        // if challenger left mid game, re-initialize host
        if (gameData.state === STATE.MATCHMAKING && !gameData.challenger) {
          setReady(false);
          setMove(false);
        }

        // check if two players are present
        if (
          gameData.state === STATE.MATCHMAKING &&
          gameData.host &&
          gameData.challenger
        ) {
          firebaseRef.current.game(id).update({
            state: STATE.READY_UP,
          });
        }

        // check if both players are ready
        if (
          gameData.state === STATE.READY_UP &&
          gameData.hostReady &&
          gameData.challengerReady
        ) {
          firebaseRef.current.game(id).update({
            state: STATE.MAKE_MOVE,
          });

          setMove(false);
        }

        // check player moves
        if (
          gameData.state === STATE.MAKE_MOVE &&
          gameData.hostMove &&
          gameData.challengerMove
        ) {
          let hostScore = gameData.hostScore;
          let challengerScore = gameData.challengerScore;
          let roundResult = null;

          if (gameData.hostMove === gameData.challengerMove) {
            // same moves result in a draw
            roundResult = RESULT.DRAW;
          } else if (
            (gameData.hostMove === MOVE.ROCK &&
              gameData.challengerMove === MOVE.SCISSOR) ||
            (gameData.hostMove === MOVE.PAPER &&
              gameData.challengerMove === MOVE.ROCK) ||
            (gameData.hostMove === MOVE.SCISSOR &&
              gameData.challengerMove === MOVE.PAPER)
          ) {
            // host wins
            hostScore++;
            roundResult = RESULT.HOST_WIN;
          } else {
            challengerScore++;
            roundResult = RESULT.CHALLENGER_WIN;
          }

          // check if game over state
          if (hostScore === 3 || challengerScore === 3) {
            // update user win/loss statistics
            if (hostScore === 3) {
              const updatedHostWins = gameData.host.wins + 1;
              const updatedChallengerLosses = gameData.challenger.losses + 1;

              firebaseRef.current.user(gameData.host.id).update({
                wins: updatedHostWins,
              });

              firebaseRef.current.user(gameData.challenger.id).update({
                losses: updatedChallengerLosses,
              });
            } else {
              const updatedHostLosses = gameData.host.losses + 1;
              const updatedChallengerWins = gameData.challenger.wins + 1;

              firebaseRef.current.user(gameData.host.id).update({
                losses: updatedHostLosses,
              });

              firebaseRef.current.user(gameData.challenger.id).update({
                wins: updatedChallengerWins,
              });
            }

            // update to game over state
            const updatedHost = await firebaseRef.current
              .user(gameData.host.id)
              .get();
            const updatedHostData = updatedHost.data();

            const updatedChallenger = await firebaseRef.current
              .user(gameData.challenger.id)
              .get();
            const updatedChallengerData = updatedChallenger.data();

            firebaseRef.current.game(id).update({
              state: STATE.GAME_OVER,
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
            firebaseRef.current.game(id).update({
              state: STATE.ROUND_RESULT,
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
          gameData.state === STATE.ROUND_RESULT &&
          gameData.hostReady &&
          gameData.challengerReady
        ) {
          const nextRound = gameData.round + 1;

          firebaseRef.current.game(id).update({
            state: STATE.MAKE_MOVE,
            round: nextRound,
            roundResult: null,
            hostMove: null,
            challengerMove: null,
          });

          setMove(false);
        }

        // move to rematch
        if (
          gameData.state === STATE.GAME_OVER &&
          gameData.hostReady &&
          gameData.challengerReady
        ) {
          firebaseRef.current.game(id).update({
            state: STATE.MAKE_MOVE,
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
      firebaseRef.current.game(id).delete();
    }

    if (!isHost) {
      // if challenger, set room into matchmaking mode
      firebaseRef.current.game(id).update({
        challenger: null,
        state: STATE.MATCHMAKING,
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
    const listener = onJoin();

    return () => {
      listener(); // unsubscribe to listener
      onLeave(); // clean up the room
    };
  }, [onJoin, onLeave]);

  if (loading) {
    return <Loader />;
  }

  // set this user to ready up
  const handleReadyUp = () => {
    if (isHost) {
      firebaseRef.current.game(id).update({
        hostReady: true,
      });
    } else {
      firebaseRef.current.game(id).update({
        challengerReady: true,
      });
    }

    setReady(true);
  };

  // set user move
  const handleMove = (move) => {
    if (isHost) {
      firebaseRef.current.game(id).update({
        hostMove: move,
      });
    } else {
      firebaseRef.current.game(id).update({
        challengerMove: move,
      });
    }

    setMove(true);
  };

  // leave match
  const handleLeave = () => {
    history.push(ROUTES.HOME);
  };

  // set game state view
  let gameState = null;
  switch (game.state) {
    case STATE.MATCHMAKING:
      gameState = <p>Waiting for Challenger</p>;
      break;
    case STATE.READY_UP:
      gameState = (
        <div>
          <p>Waiting for players to be ready...</p>

          <Button onClick={handleReadyUp} disabled={isReady}>
            Ready Up
          </Button>
        </div>
      );
      break;
    case STATE.MAKE_MOVE:
      gameState = (
        <div>
          <GameScoreboard
            round={game.round}
            hostScore={game.hostScore}
            challengerScore={game.challengerScore}
          />

          {moveMade ? <p>Waiting for opponent</p> : <p>Make your move</p>}

          <Button onClick={() => handleMove(MOVE.ROCK)} disabled={moveMade}>
            Rock
          </Button>
          <Button onClick={() => handleMove(MOVE.PAPER)} disabled={moveMade}>
            Paper
          </Button>
          <Button onClick={() => handleMove(MOVE.SCISSOR)} disabled={moveMade}>
            Scissor
          </Button>
        </div>
      );
      break;
    case STATE.ROUND_RESULT:
      gameState = (
        <div>
          <GameScoreboard
            round={game.round}
            hostScore={game.hostScore}
            challengerScore={game.challengerScore}
          />

          <div>
            {game.hostMove} - {game.challengerMove}
          </div>

          {isHost && game.roundResult === RESULT.HOST_WIN && (
            <p>You win this round!</p>
          )}
          {!isHost && game.roundResult === RESULT.HOST_WIN && (
            <p>You lost this round!</p>
          )}
          {isHost && game.roundResult === RESULT.CHALLENGER_WIN && (
            <p>You lost this round!</p>
          )}
          {!isHost && game.roundResult === RESULT.CHALLENGER_WIN && (
            <p>You win this round!</p>
          )}
          {game.roundResult === RESULT.DRAW && <p>Draw!</p>}

          <Button onClick={handleReadyUp} disabled={isReady}>
            Next
          </Button>
        </div>
      );
      break;
    case STATE.GAME_OVER:
      gameState = (
        <div>
          <GameScoreboard
            round={game.round}
            hostScore={game.hostScore}
            challengerScore={game.challengerScore}
          />

          {isHost && game.roundResult === RESULT.HOST_WIN && (
            <p>Game Over, You win!</p>
          )}
          {!isHost && game.roundResult === RESULT.HOST_WIN && (
            <p>Game Over, You lose!</p>
          )}
          {isHost && game.roundResult === RESULT.CHALLENGER_WIN && (
            <p>Game Over, You lose!</p>
          )}
          {!isHost && game.roundResult === RESULT.CHALLENGER_WIN && (
            <p>Game Over, You win!</p>
          )}

          <Button onClick={handleReadyUp} disabled={isReady}>
            Rematch?
          </Button>

          <Button onClick={handleLeave}>Leave</Button>
        </div>
      );
      break;
    default:
      gameState = null;
  }

  return (
    <Page>
      <GameUserStats
        host={game.host}
        challenger={game.challenger}
        isHost={isHost}
      />
      <hr />
      {gameState}
    </Page>
  );
};

export default Game;
