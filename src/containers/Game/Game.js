import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useAuth } from '../../store/auth';
import { useFirebase } from '../../store/firebase';

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);
  const [isHost, setHost] = useState(false);

  const { id } = useParams();
  const auth = useAuth();
  const authRef = useRef(auth);
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  const deleteGame = useCallback(() => {
    firebaseRef.current.game(id).delete();
  }, [id]);

  useEffect(() => {
    const listener = firebaseRef.current.game(id).onSnapshot((snapshot) => {
      const gameData = snapshot.data();

      if (gameData.host.id === authRef.current.user.id) {
        setHost(true);
      }

      setGame(gameData);
    });

    setLoading(false);

    return () => {
      if (isHost) {
        deleteGame();
      }

      listener(); // unsubscribe to listener
    };
  }, [id, isHost, deleteGame]);

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
