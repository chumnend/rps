import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import GameUserStats from '../../components/GameUserStats';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import * as ROUTES from '../../constants/routes';
import { useAuth } from '../../store/auth';
import { useFirebase } from '../../store/firebase';

export const STATE = {
  MATCHMAKING: 'matchmaking',
  READY_UP: 'ready_up',
  MAKE_MOVE: 'make_move',
  ROUND_RESULT: 'round_result',
  GAME_OVER: 'game_over',
};

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [isHost, setHost] = useState(false);
  const [isReady, setReady] = useState(false);

  const { id } = useParams();
  const history = useHistory();
  const auth = useAuth();
  const authRef = useRef(auth);
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  // onJoin - Setups on game listener for updating from firebase
  const onJoin = useCallback(() => {
    const listener = firebaseRef.current.game(id).onSnapshot((snapshot) => {
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
          <p>Starting game...</p>
        </div>
      );
      break;
    case STATE.ROUND_RESULT:
      gameState = (
        <div>
          <p>Revealing result...</p>
        </div>
      );
      break;
    case STATE.GAME_OVER:
      gameState = (
        <div>
          <p>Match End...</p>
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
