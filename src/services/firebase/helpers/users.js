import { auth, db } from '../config';
import { USERS_ID } from '../constants/collection';

/*
 * Return user reference from firebase
 * @param {string} id - the document identifier for the user
 * @return {Object} userRef - the reference object for the user
 */
export const getUser = (id) => {
  const userRef = db.collection(USERS_ID).doc(id);
  return userRef;
};

/*
 * Returns list of users in firebase
 * @return {Array<Object>} users - array of the users in firebase
 */
export const listUsers = async () => {
  const users = [];

  const usersRef = db.collection(USERS_ID);
  const snapshot = await usersRef.get();
  if (snapshot.empty) {
    return [];
  }

  snapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users;
};

/*
 * Login the user with firebase
 * @param {string} email - the user's email
 * @param {string} password - the user's password
 * @return {Object} userData - the user's data from firebase
 */
export const loginUser = async (email, password) => {
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

/*
 * Logs out the user
 */
export const logoutUser = async () => {
  await auth.signOut();
};

/*
 * Creates user account in firebase
 * @param {string} username - the user's username
 * @param {string} email - the user's email
 * @param {string} password - the user's password
 * @return {Object} userData - the user's data from firebase
 */
export const registerUser = async (username, email, password) => {
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

/*
 * Reset a user's password if they exist
 * @param {string} email - the user's email
 * @return {boolean} - true if successful else false
 */
export const resetPassword = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);

    return true;
  } catch (error) {
    return false;
  }
};

/*
 * Updates current logged in user's password
 * @param {string} password - tthe desired new password
 * @return {boolean} - true if successful else false
 */
export const updatePassword = async (password) => {
  try {
    const user = auth.currentUser;
    await user.updatePassword(password);

    return true;
  } catch (error) {
    return false;
  }
};
