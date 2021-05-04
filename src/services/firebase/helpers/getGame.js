import { db } from '../config';
import { GAMES_ID } from '../constants/collection';

const getGame = (id) => {
  const gameRef = db.collection(GAMES_ID).doc(id);
  return gameRef;
};

export default getGame;
