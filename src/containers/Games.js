import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import GamesList from '../components/GamesList';
import Loader from '../components/Loader';
import Page from '../components/Page';
import * as GAME from '../constants/game';
import * as ROUTES from '../constants/routes';
import useFirebase from '../hooks/useFirebase';

const Games = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  const history = useHistory();
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current
      .getGames()
      .get()
      .then((snapshot) => {
        const foundGames = [];
        snapshot.forEach((doc) => {
          const gameData = doc.data();
          if (gameData.state === GAME.STATE_MATCHMAKING) {
            foundGames.push(doc.data());
          }
        });
        setGames(foundGames);
        setLoading(false);
      });
  }, []);

  const handleJoin = (id) => {
    history.push(ROUTES.GAME_WITH_ID(id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Page>
      <GamesList games={games} handleJoin={handleJoin} />
    </Page>
  );
};

export default Games;
