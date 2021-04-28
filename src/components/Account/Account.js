import React from 'react';
import { useHistory } from 'react-router-dom';

import * as ROUTES from '../../common/constants/routes';
import { useFirebase } from '../../services/firebase';
import AccountCard from './components/AccountCard';
import Layout from './components/Layout';
import PasswordChangeForm from './components/PasswordChangeForm';

const Account = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const updatePassword = async (newPassword) => {
    const success = await firebase.updatePassword(newPassword);

    if (success) {
      history.push(ROUTES.LOGOUT);
    }
  };

  return (
    <Layout>
      <AccountCard user={firebase.user} />
      <br />
      <PasswordChangeForm
        updatePassword={updatePassword}
        error={firebase.error}
      />
    </Layout>
  );
};

export default Account;
