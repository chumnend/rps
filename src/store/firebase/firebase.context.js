import React from 'react';
import PropTypes from 'prop-types';
import { app, auth, db } from './firebase.config';

const FirebaseContext = React.createContext();

const useFirebase = () => React.useContext(FirebaseContext);

const FirebaseProvider = (props) => {
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

  const users = () => db.collection('users');
  const user = (id) => db.collection('users').doc(id);

  const firebaseValues = {
    app,
    auth,
    users,
    user,
    register,
    login,
    logout,
    resetPassword,
    updatePassword,
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
