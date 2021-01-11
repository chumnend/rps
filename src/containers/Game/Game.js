import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import GameUserStats from '../../components/GameUserStats';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import * as ROUTES from '../../constants/routes';
import { useAuth } from '../../store/auth';
import { useFirebase } from '../../store/firebase';

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [isHost, setHost] = useState(false);

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

      // change matchmaking state
      if (gameData.host && gameData.challenger) {
        firebaseRef.current.game(id).update({
          isMatchmaking: false,
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
        isMatchmaking: true,
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

  return (
    <Page>
      <GameUserStats
        host={game.host}
        challenger={game.challenger}
        isHost={isHost}
      />
      <hr />
      <p>{game.isMatchmaking && 'Waiting'}</p>
    </Page>
  );
};

export default Game;
