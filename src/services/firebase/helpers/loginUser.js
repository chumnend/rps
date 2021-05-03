import { auth, db } from '../config';
import { USERS_ID } from '../constants/collection';

const loginUser = async (email, password) => {
  try {
    const cred = await auth.signInWithEmailAndPassword(email, password);

    // store user in state
    const user = cred.user;
    const userRef = db.collection(USERS_ID).doc(user.uid);
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data();

    return userData;
  } catch (error) {
    throw error;
  }
};

export default loginUser;
