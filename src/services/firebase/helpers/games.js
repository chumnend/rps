import { STATE_MATCHMAKING } from '../../../common/constants/game';
import { auth, db } from '../config';
import { GAMES_ID, USERS_ID } from '../constants/collection';

/*
 * Returns game reference from firebase
 * @param {string} id - the document identifier for the game
 * @return {Object} gamesRef - the reference object for the game
 */
export const getGame = (id) => {
  const gameRef = db.collection(GAMES_ID).doc(id);
  return gameRef;
};

/*
 * Creates new game instance in firebase
 * @return {string} id -firebase game identifier
 */
export const hostGame = async () => {
  // get current user
  const user = auth.currentUser;
  const userRef = db.collection(USERS_ID).doc(user.uid);
  const userSnapshot = await userRef.get();
  const userData = userSnapshot.data();

  // setup game in firestore
  const gamesRef = db.collection(GAMES_ID);
  const gameDoc = await gamesRef.add({});

  const id = gameDoc.id;

  await gamesRef.doc(id).set({
    id: id,
    name: `vs. ${userData.username}`,
    host: userData,
    challenger: null,
    state: STATE_MATCHMAKING,
    round: 1,
    roundResult: null,
    hostReady: false,
    hostMove: null,
    hostScore: 0,
    challengerReady: false,
    challengerMove: null,
    challengerScore: 0,
  });

  return id;
};

/*
 * Returns list of games in firebase
 * @return {Array<Object>} games - array of the games in firebase
 */
export const listGames = async () => {
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

/*
 * Returns list of games in firebase that are marked as looking for match
 * @return {Array<Object>} games - array of the games in firebase
 */
export const listOpenGames = async () => {
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
