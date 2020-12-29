import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
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
            isMatchmaking: true,
            isPlaying: false,
            isSelectingMove: false,
          })
          .then(() => {
            history.push(ROUTES.GAME_WITH_ID(doc.id));
          });
      });
  };

  return (
    <div>
      <h1>RPS Duels!</h1>
      <Button size="lg" onClick={findGames}>
        Find Games
      </Button>
      <Button size="lg" onClick={hostGame}>
        Host Game
      </Button>
    </div>
  );
};

export default Home;