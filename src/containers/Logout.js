import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useFirebase } from '../store/firebase';
import * as ROUTES from '../constants/routes';

const Logout = () => {
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current.logout();
  }, []);

  return <Redirect to={ROUTES.LANDING} />;
};

export default Logout;
