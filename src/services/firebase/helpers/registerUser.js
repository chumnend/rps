import { auth, db } from '../config';
import { USERS_ID } from '../constants/collection';

const registerUser = async (username, email, password) => {
  try {
    // create user in firebase auth
    const cred = await auth.createUserWithEmailAndPassword(email, password);

    // add user to firestore and append schema
    const user = cred.user;
    const userRef = db.collection(USERS_ID).doc(user.uid);

    await userRef.set({
      id: user.uid,
      username,
      email,
      wins: 0,
      losses: 0,
      admin: false,
    });

    // store user in state
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data();

    return userData;
  } catch (error) {
    throw error;
  }
};

export default registerUser;
