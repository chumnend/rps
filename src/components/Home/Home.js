import React from 'react';
import { useHistory } from 'react-router-dom';

import * as GAME from '../../common/constants/game';
import * as ROUTES from '../../common/constants/routes';
import useFirebase from '../../common/hooks/useFirebase';
import Layout from './components/Layout';
import MatchFinder from './components/MatchFinder';

const Home = () => {
  const history = useHistory();
  const firebase = useFirebase();

  const findGames = () => {
    history.push(ROUTES.GAMES);
  };

  const hostGame = () => {
    firebase
      .getGames()
      .add({})
      .then((doc) => {
        return firebase
          .getGame(doc.id)
          .set({
            id: doc.id,
            name: `vs. ${firebase.user.username}`,
            host: firebase.user,
            challenger: null,
            state: GAME.STATE_MATCHMAKING,
            round: 1,
            roundResult: null,
            hostReady: false,
            hostMove: null,
            hostScore: 0,
            challengerReady: false,
            challengerMove: null,
            challengerScore: 0,
          })
          .then(() => {
            history.push(ROUTES.GAME_WITH_ID(doc.id));
          });
      });
  };

  return (
    <Layout data-testid="home">
      <MatchFinder onFind={findGames} onHost={hostGame} />
    </Layout>
  );
};

export default Home;
