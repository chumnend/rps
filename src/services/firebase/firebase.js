import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { auth } from './config';
import * as firebaseHelpers from './helpers';

const FirebaseContext = React.createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      setLoading(true);

      if (!authUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      const userRef = firebaseHelpers.getUserRef(authUser.uid);
      const userDoc = await userRef.get();

      setUser(userDoc.data());
      setLoading(false);
    });

    return () => {
      unsubscribe(); // unsubscribe to listener
    };
  }, []);

  const firebaseValues = {
    user,
    loading,

    ...firebaseHelpers,
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
