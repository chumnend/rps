import React from 'react';
import PasswordChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';

const Account = () => {
  return (
    <div>
      <h1>Account</h1>
      <PasswordChange />
      <PasswordForget />
    </div>
  );
};

export default Account;
