import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { useFirebase } from '../../store/firebase';
import * as ROUTES from '../../constants/routes';

const SignOutButton = () => {
  const history = useHistory();
  const firebase = useFirebase();

  const handleLogout = () => {
    firebase.logout();
    history.push(ROUTES.LANDING);
  };

  return (
    <Button size="sm" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default SignOutButton;
