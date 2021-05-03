import { db } from '../config';
import { GAMES_ID } from '../constants/collection';

const listGames = async () => {
  const games = [];

  const gamesRef = db.collection(GAMES_ID);
  const snapshot = await gamesRef.get();
  if (snapshot.empty) {
    return [];
  }

  snapshot.forEach((doc) => {
    games.push(doc.data());
  });

  return games;
};

export default listGames;
