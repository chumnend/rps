import React from 'react';

import useFirebase from '../../common/hooks/useFirebase';
import AccountCard from '../../components/AccountCard';
import { PasswordChangeForm } from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';
import Layout from './components/Layout';

const Account = () => {
  const firebase = useFirebase();

  return (
    <Layout>
      <AccountCard user={firebase.user} />
      <br />
      <PasswordChangeForm />
      <br />
      <PasswordForgetForm />
    </Layout>
  );
};

export default Account;
