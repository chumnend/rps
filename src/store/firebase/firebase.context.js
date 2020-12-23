import React from 'react';
import PropTypes from 'prop-types';
import { app, auth } from './firebase.config';

const FirebaseContext = React.createContext();

const useFirebase = () => React.useContext(FirebaseContext);

const FirebaseProvider = (props) => {
  const register = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    auth.signOut();
  };

  const resetPassword = (email) => {
    auth.sendPasswordResetEmail(email);
  }

  const updatePassword = (password) => {
    auth.currentUser.updatePassword(password);
  }

  const firebaseValues = {
    app,
    auth,
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
