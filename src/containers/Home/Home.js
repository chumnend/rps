import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import List from '../../components/List';
import ListTitle from '../../components/ListTitle';
import ListItem from '../../components/ListItem';
import Page from '../../components/Page';
import { STATE } from '../Game';
import * as ROUTES from '../../constants/routes';
import { useAuth } from '../../store/auth';
import { useFirebase } from '../../store/firebase';

const Home = () => {
  const history = useHistory();
  const auth = useAuth();
  const firebase = useFirebase();

  const findGames = () => {
    history.push(ROUTES.GAMES);
  };

  const hostGame = () => {
    firebase
      .games()
      .add({})
      .then((doc) => {
        return firebase
          .game(doc.id)
          .set({
            id: doc.id,
            name: `vs. ${auth.user.username}`,
            host: auth.user,
            challenger: null,
            state: STATE.MATCHMAKING,
            round: 1,
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
    <Page>
      <List>
        <ListTitle>Ready for a match?</ListTitle>
        <ListItem>
          <Button size="lg" onClick={findGames}>
            Find Games
          </Button>
        </ListItem>
        <ListItem>OR</ListItem>
        <ListItem>
          <Button size="lg" onClick={hostGame}>
            Host Game
          </Button>
        </ListItem>
      </List>
    </Page>
  );
};

export default Home;
