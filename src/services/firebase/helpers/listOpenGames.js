import { STATE_MATCHMAKING } from '../../../common/constants/game';
import { db } from '../config';
import { GAMES_ID } from '../constants/collection';

const listOpenGames = async () => {
  const games = [];

  const gamesRef = db.collection(GAMES_ID);
  const snapshot = await gamesRef.get();
  if (snapshot.empty) {
    return [];
  }

  snapshot.forEach((doc) => {
    const data = doc.data();

    if (data.state === STATE_MATCHMAKING) {
      games.push(data);
    }
  });

  return games;
};

export default listOpenGames;
