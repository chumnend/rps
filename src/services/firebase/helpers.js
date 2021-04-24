import { auth, db } from './config';

// USER API
export const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logoutUser = () => {
  return auth.signOut();
};

export const resetPassword = (email) => {
  return auth.sendPasswordResetEmail(email);
};

export const updatePassword = (password) => {
  return auth.user.updatePassword(password);
};

export const getUsers = () => {
  return db.collection('users');
};
export const getUserRef = (id) => {
  return db.collection('users').doc(id);
};

// GAME API
export const getGames = () => {
  return db.collection('games');
};

export const getGame = (id) => {
  return db.collection('games').doc(id);
};
