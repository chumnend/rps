import React from 'react';

import AccountCard from '../components/AccountCard';
import Page from '../components/Page';
import useFirebase from '../hooks/useFirebase';
import { PasswordChangeForm } from './PasswordChange';
import { PasswordForgetForm } from './PasswordForget';

const Account = () => {
  const firebase = useFirebase();

  return (
    <Page>
      <AccountCard user={firebase.user} />
      <br />
      <PasswordChangeForm />
      <br />
      <PasswordForgetForm />
    </Page>
  );
};

export default Account;
