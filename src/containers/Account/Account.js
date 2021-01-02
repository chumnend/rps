import React from 'react';
import { PasswordChangeForm } from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';
import Page from '../../components/Page';
import { useAuth } from '../../store/auth';

const Account = () => {
  const auth = useAuth();

  return (
    <Page>
      <h1>Account: {auth.user.email} </h1>
      <PasswordChangeForm />
      <br />
      <PasswordForgetForm />
    </Page>
  );
};

export default Account;
