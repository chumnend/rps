import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import * as ROUTES from '../../constants/routes';
import { useFirebase } from '../../store/firebase';

const Games = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  const history = useHistory();
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current
      .games()
      .get()
      .then((snapshot) => {
        const foundGames = [];
        snapshot.forEach((doc) => {
          const gameData = doc.data();
          if (gameData.isMatchmaking) {
            foundGames.push(doc.data());
          }
        });
        setGames(foundGames);
      });

    setLoading(false);
  }, []);

  const handleJoin = (id) => {
    history.push(ROUTES.GAME_WITH_ID(id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <ul>
        {games.map((g) => (
          <li key={g.id}>
            <p>{g.name}</p>
            <Button onClick={() => handleJoin(g.id)}>Join</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
