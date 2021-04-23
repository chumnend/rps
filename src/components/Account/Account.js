import React, { useState } from 'react';

import useFirebase from '../../common/hooks/useFirebase';
import { PasswordChangeForm } from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';
import AccountCard from './components/AccountCard';
import Layout from './components/Layout';

const Account = () => {
  const [error, setError] = useState(null);

  const firebase = useFirebase();

  const updatePassword = (newPassword) => {
    firebase
      .updatePassword(newPassword)
      .then(() => {
        console.log('done');
      })
      .catch((error) => {
        setError(error);
      });
  };

  const resetPassword = (email) => {
    firebase
      .resetPassword(email)
      .then(() => {
        console.log('done');
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Layout>
      <AccountCard user={firebase.user} />
      <br />
      <PasswordChangeForm
        updatePassword={updatePassword}
        error={error?.message}
      />
      <br />
      <PasswordForgetForm
        resetPassword={resetPassword}
        error={error?.message}
      />
    </Layout>
  );
};

export default Account;
