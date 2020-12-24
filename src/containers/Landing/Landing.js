import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  const history = useHistory();

  const findGames = () => {
    history.push(ROUTES.GAMES);
  };

  const hostGame = () => {
    alert('creating...');
    history.push(ROUTES.GAME_WITH_ID(123));
  };

  return (
    <div>
      <h1>Welcome to RPS Duels!</h1>
      <Button onClick={findGames}>Find Games</Button>
      <Button onClick={hostGame}>Host Game</Button>
    </div>
  );
};

export default Landing;
