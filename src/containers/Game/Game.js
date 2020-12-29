import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Loader from '../../components/Loader';
import * as ROUTES from '../../constants/routes';
import { useAuth } from '../../store/auth';
import { useFirebase } from '../../store/firebase';

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [isHost, setHost] = useState(false);
  const [isChallenger, setChallenger] = useState(false);

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
        setChallenger(true);
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
    });

    return listener;
  }, [id, history]);

  // onLeave - cleans up firebase state depending on game role
  const onLeave = useCallback(() => {
    if (isHost) {
      // if host, delete the game room
      firebaseRef.current.game(id).delete();
    }

    if (isChallenger) {
      // if challenger, set room into matchmaking mode
      firebaseRef.current.game(id).update({
        challenger: null,
        isMatchmaking: true,
      });
    }
  }, [id, isHost, isChallenger]);

  useEffect(() => {
    const listener = onJoin();
    setLoading(false);

    return () => {
      listener(); // unsubscribe to listener
      onLeave(); // clean up the room
    };
  }, [onJoin, onLeave]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Game</h1>

      <div>
        {game && game.host && (
          <div>
            <p>User: {game.host.username}</p>
            <p>Wins: {game.host.wins}</p>
            <p>Losses: {game.host.losses}</p>
            <p>{isHost && '(YOU)'}</p>
          </div>
        )}
        <hr />
        {game && game.challenger && (
          <div>
            <p>User: {game.challenger.username}</p>
            <p>Wins: {game.challenger.wins}</p>
            <p>Losses: {game.challenger.losses}</p>
            <p>{isChallenger && '(YOU)'}</p>
          </div>
        )}
      </div>

      <hr />
      <p>{game && game.isMatchmaking && 'Waiting'}</p>
    </div>
  );
};

export default Game;
