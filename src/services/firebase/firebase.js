import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';

import * as GAME from '../../common/constants/game';
import { auth, db } from './config';

const initialState = {
  loading: true,
  error: '',
  user: null,
};

const AUTHENTICATING = 'authenticating';
const AUTH_SUCCESS = 'auth_succes';
const AUTH_ERROR = 'auth_error';
const AUTH_LOGOUT = 'auth_logout';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        user: action.user,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        user: null,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        error: '',
        user: null,
      };
    default:
      return state;
  }
};

const FirebaseContext = React.createContext();

const FirebaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      dispatch({ type: AUTHENTICATING });

      // check to see if user exists
      if (user) {
        // pull user info from firebase
        const userRef = db.collection('users').doc(user.uid);
        const userSnapshot = await userRef.get();
        const userData = userSnapshot.data();

        // update user state
        dispatch({ type: AUTH_SUCCESS, user: userData });
        return;
      }

      // clear user state if not signed in
      dispatch({ type: AUTH_LOGOUT });
      return;
    });

    return () => {
      unsubscribe(); // unsubscribe to listener
    };
  }, []);

  const registerUser = async (username, email, password) => {
    dispatch({ type: AUTHENTICATING });

    try {
      // create user in firebase auth
      const cred = await auth.createUserWithEmailAndPassword(email, password);

      // add user to firestore and append schema
      const user = cred.user;
      const userRef = db.collection('users').doc(user.uid);

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

      dispatch({
        type: AUTH_SUCCESS,
        user: userData,
      });

      return true;
    } catch (error) {
      dispatch({ type: AUTH_ERROR, error: error.message });
      return false;
    }
  };

  const loginUser = async (email, password) => {
    dispatch({ type: AUTHENTICATING });

    try {
      const cred = await auth.signInWithEmailAndPassword(email, password);

      // store user in state
      const user = cred.user;
      const userRef = db.collection('users').doc(user.uid);
      const userSnapshot = await userRef.get();
      const userData = userSnapshot.data();

      dispatch({
        type: AUTH_SUCCESS,
        user: userData,
      });

      return true;
    } catch (error) {
      dispatch({ type: AUTH_ERROR, error: error.message });
      return false;
    }
  };

  const resetPassword = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);

      return true;
    } catch (error) {
      return false;
    }
  };

  const updatePassword = async (password) => {
    try {
      const user = auth.currentUser;
      await user.updatePassword(password);

      return true;
    } catch (error) {
      return false;
    }
  };

  const logoutUser = async () => {
    await auth.signOut();
    dispatch({ type: AUTH_LOGOUT });
  };

  const findUsers = async () => {
    const users = [];

    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    if (snapshot.empty) {
      return [];
    }

    snapshot.forEach((doc) => {
      users.push(doc.data());
    });

    return users;
  };

  const findGames = async () => {
    const games = [];

    const gamesRef = db.collection('games');
    const snapshot = await gamesRef.get();
    if (snapshot.empty) {
      return [];
    }

    snapshot.forEach((doc) => {
      games.push(doc.data());
    });

    return games;
  };

  const findOpenGames = async () => {
    const games = [];

    const gamesRef = db.collection('games');
    const snapshot = await gamesRef.get();
    if (snapshot.empty) {
      return [];
    }

    snapshot.forEach((doc) => {
      const data = doc.data();

      if (data.state === GAME.STATE_MATCHMAKING) {
        games.push(data);
      }
    });

    return games;
  };

  const firebaseValues = {
    ...state,

    registerUser,
    loginUser,
    resetPassword,
    updatePassword,
    logoutUser,

    findUsers,
    findGames,

    findOpenGames,
  };

  return (
    <FirebaseContext.Provider value={firebaseValues}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};

export { FirebaseContext, FirebaseProvider };
