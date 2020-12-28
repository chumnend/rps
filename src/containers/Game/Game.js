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

  const onLeave = useCallback(() => {
    if (isHost) {
      firebaseRef.current.game(id).delete();
    }

    if (isChallenger) {
      firebaseRef.current.game(id).update({
        challenger: null,
      });
    }
  }, [id, isHost, isChallenger]);

  useEffect(() => {
    const listener = firebaseRef.current.game(id).onSnapshot((snapshot) => {
      const gameData = snapshot.data();

      // if game does not exist, bounce to home
      if (!gameData) {
        history.push(ROUTES.LANDING);
        return;
      }

      // determine if current user is the host
      if (gameData.host.id === authRef.current.user.id) {
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

      setGame(gameData);
    });

    setLoading(false);

    return () => {
      listener(); // unsubscribe to listener
      onLeave(); // clean up the room
    };
  }, [id, history, onLeave]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Game</h1>
      <p>{game && game.isMatchmaking && 'Waiting'}</p>
      <p>{isHost && 'host'}</p>
    </div>
  );
};

export default Game;
