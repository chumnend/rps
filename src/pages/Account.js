import React from 'react';

import AccountCard from '../components/AccountCard';
import PageContent from '../components/PageContent';
import useFirebase from '../hooks/useFirebase';
import { PasswordChangeForm } from './PasswordChange';
import { PasswordForgetForm } from './PasswordForget';

const Account = () => {
  const firebase = useFirebase();

  return (
    <PageContent>
      <AccountCard user={firebase.user} />
      <br />
      <PasswordChangeForm />
      <br />
      <PasswordForgetForm />
    </PageContent>
  );
};

export default Account;
