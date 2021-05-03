import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Loader from '../../common/components/Loader';
import * as ROUTES from '../../common/constants/routes';
import { useFirebase } from '../../services/firebase';
import GamesList from './components/GamesList';
import Layout from './components/Layout';

const Games = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  const history = useHistory();
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const findOpenGames = async () => {
      const games = await firebaseRef.current.listOpenGames();
      setGames(games);
    };

    findOpenGames();
    setLoading(false);
  }, []);

  const handleJoin = (id) => {
    history.push(ROUTES.GAME_WITH_ID(id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <GamesList games={games} handleJoin={handleJoin} />
    </Layout>
  );
};

export default Games;
