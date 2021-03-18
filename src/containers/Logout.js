import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import * as ROUTES from '../constants/routes';

const Logout = () => {
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current.logoutUser();
  }, []);

  return <Redirect to={ROUTES.LANDING} />;
};

export default Logout;
