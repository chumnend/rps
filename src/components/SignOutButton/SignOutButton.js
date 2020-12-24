import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { useFirebase } from '../../store/firebase';
import * as ROUTES from '../../utils/constants/routes';

const SignOutButton = () => {
  const history = useHistory();
  const firebase = useFirebase();

  const handleLogout = () => {
    firebase.logout();
    history.push(ROUTES.LANDING);
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
};

export default SignOutButton;
