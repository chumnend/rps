import React from 'react';
import PropTypes from 'prop-types';
import * as firebase from './firebase.config';

const FirebaseContext = React.createContext();

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};

export { FirebaseContext, FirebaseProvider };
