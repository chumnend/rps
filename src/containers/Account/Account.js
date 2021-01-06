import React from 'react';
import { PasswordChangeForm } from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';
import AccountCard from '../../components/AccountCard';
import Page from '../../components/Page';
import { useAuth } from '../../store/auth';

const Account = () => {
  const auth = useAuth();

  return (
    <Page>
      <AccountCard user={auth.user} />
      <br />
      <PasswordChangeForm />
      <br />
      <PasswordForgetForm />
    </Page>
  );
};

export default Account;
