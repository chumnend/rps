import React from 'react';
import { useHistory } from 'react-router-dom';

import * as ROUTES from '../../common/constants/routes';
import { useFirebase } from '../../services/firebase';
import Layout from './components/Layout';
import MatchFinder from './components/MatchFinder';

const Home = () => {
  const history = useHistory();
  const firebase = useFirebase();

  const findGames = () => {
    history.push(ROUTES.GAMES);
  };

  const hostGame = async () => {
    const id = await firebase.hostGame();
    history.push(ROUTES.GAME_WITH_ID(id));
  };

  return (
    <Layout data-testid="home">
      <MatchFinder onFind={findGames} onHost={hostGame} />
    </Layout>
  );
};

export default Home;
