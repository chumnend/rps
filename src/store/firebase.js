import React from 'react';
import PropTypes from 'prop-types';
import { auth, db } from '../config';

const FirebaseContext = React.createContext();

const useFirebase = () => React.useContext(FirebaseContext);

const FirebaseProvider = (props) => {
  // USER API
  const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updatePassword = (password) => {
    return auth.currentUser.updatePassword(password);
  };

  const users = () => {
    return db.collection('users');
  };
  const user = (id) => {
    return db.collection('users').doc(id);
  };

  // GAME API
  const games = () => {
    return db.collection('games');
  };

  const game = (id) => {
    return db.collection('games').doc(id);
  };

  const firebaseValues = {
    auth,
    db,
    register,
    login,
    logout,
    resetPassword,
    updatePassword,
    users,
    user,
    games,
    game,
  };

  return (
    <FirebaseContext.Provider value={firebaseValues}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};

export { FirebaseContext, FirebaseProvider, useFirebase };
