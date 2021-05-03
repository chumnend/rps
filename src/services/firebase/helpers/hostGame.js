import { STATE_MATCHMAKING } from '../../../common/constants/game';
import { auth, db } from '../config';
import { GAMES_ID, USERS_ID } from '../constants/collection';

const hostGame = async () => {
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

export default hostGame;
