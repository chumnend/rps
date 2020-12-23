import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import * as ROUTES from '../../constants/routes';
import { useFirebase } from '../../store/firebase';

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
