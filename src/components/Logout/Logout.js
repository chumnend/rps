import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import * as ROUTES from '../../common/constants/routes';
import useFirebase from '../../common/hooks/useFirebase';

const Logout = () => {
  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current.logoutUser();
  }, []);

  return <Redirect to={ROUTES.LANDING} />;
};

export default Logout;
