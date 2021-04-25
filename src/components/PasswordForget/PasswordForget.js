import React from 'react';

import useFirebase from '../../common/hooks/useFirebase';
import Layout from './components/Layout';
import PasswordForgetForm from './components/PasswordForgetForm';

const PasswordForget = () => {
  const firebase = useFirebase();

  const resetPassword = async (email) => {
    await firebase.resetPassword(email);
  };

  return (
    <Layout>
      <PasswordForgetForm
        resetPassword={resetPassword}
        error={firebase.error}
      />
    </Layout>
  );
};

export default PasswordForget;
