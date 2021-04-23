import React, { useState } from 'react';

import useFirebase from '../../common/hooks/useFirebase';
import Layout from './components/Layout';
import PasswordForgetForm from './components/PasswordForgetForm';

const PasswordForget = () => {
  const [error, setError] = useState(null);

  const firebase = useFirebase();

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
      <PasswordForgetForm
        resetPassword={resetPassword}
        error={error?.message}
      />
    </Layout>
  );
};

export default PasswordForget;
