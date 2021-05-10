import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';

import { auth, db } from '../config';
import { gameHelpers, userHelpers } from '../helpers';

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

export const FirebaseContext = React.createContext();

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

  const register = async (username, email, password) => {
    dispatch({ type: AUTHENTICATING });

    try {
      const user = await userHelpers.registerUser(username, email, password);

      dispatch({
        type: AUTH_SUCCESS,
        user: user,
      });

      return true;
    } catch (error) {
      dispatch({ type: AUTH_ERROR, error: error.message });
      return false;
    }
  };

  const login = async (email, password) => {
    dispatch({ type: AUTHENTICATING });

    try {
      const user = await userHelpers.loginUser(email, password);

      dispatch({
        type: AUTH_SUCCESS,
        user: user,
      });

      return true;
    } catch (error) {
      dispatch({ type: AUTH_ERROR, error: error.message });
      return false;
    }
  };

  const logout = async () => {
    await userHelpers.logoutUser();
    dispatch({ type: AUTH_LOGOUT });
  };

  const firebaseValues = {
    ...state,

    register,
    login,
    logout,

    ...gameHelpers,
    ...userHelpers,
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

export default FirebaseProvider;
