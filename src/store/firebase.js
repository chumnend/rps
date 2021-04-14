import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { auth, db } from '../config';

const FirebaseContext = React.createContext();

const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      setLoading(true);

      if (!authUser) {
        setUser(null);
        setLoading(false);
      } else {
        getUser(authUser.uid)
          .get()
          .then((doc) => {
            const user = doc.data();

            getUser(user.id).onSnapshot((doc) => {
              setUser(doc.data());
            });

            setUser(user);
            setLoading(false);
          });
      }
    });

    return () => {
      listener(); // unsubscribe to listener
    };
  }, []);

  // USER API
  const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logoutUser = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updatePassword = (password) => {
    return auth.user.updatePassword(password);
  };

  const getUsers = () => {
    return db.collection('users');
  };
  const getUser = (id) => {
    return db.collection('users').doc(id);
  };

  // GAME API
  const getGames = () => {
    return db.collection('games');
  };

  const getGame = (id) => {
    return db.collection('games').doc(id);
  };

  const firebaseValues = {
    user,
    loading,

    auth,
    db,
    registerUser,
    loginUser,
    logoutUser,
    resetPassword,
    updatePassword,
    getUsers,
    getUser,
    getGames,
    getGame,
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

export { FirebaseContext, FirebaseProvider };
