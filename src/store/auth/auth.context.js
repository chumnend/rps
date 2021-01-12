import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFirebase } from '../firebase';

const AuthContext = React.createContext();

const useAuth = () => React.useContext(AuthContext);

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const listener = firebaseRef.current.auth.onAuthStateChanged((authUser) => {
      setLoading(true);

      if (!authUser) {
        setUser(null);
        setLoading(false);
      } else {
        firebaseRef.current
          .user(authUser.uid)
          .get()
          .then((doc) => {
            const user = doc.data();

            firebaseRef.current.user(user.id).onSnapshot((doc) => {
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

  const authValues = {
    loading,
    user,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider, useAuth };
