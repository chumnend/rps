import React, { useState } from 'react';

import useFirebase from '../../common/hooks/useFirebase';
import Layout from './components/Layout';
import PasswordChangeForm from './components/PasswordChangeForm';

const PasswordChange = () => {
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

  return (
    <Layout>
      <PasswordChangeForm
        updatePassword={updatePassword}
        error={error?.message}
      />
    </Layout>
  );
};

export default PasswordChange;
