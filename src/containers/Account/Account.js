import React from 'react';
import PasswordChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';
import { useAuth } from '../../store/auth';

const Account = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Account: {auth.user.email} </h1>
      <PasswordChange />
      <PasswordForget />
    </div>
  );
};

export default Account;
