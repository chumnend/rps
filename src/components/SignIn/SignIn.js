import React from 'react';
import { useHistory } from 'react-router-dom';

import * as ROUTES from '../../common/constants/routes';
import { useFirebase } from '../../services/firebase';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';

const SignIn = () => {
  const history = useHistory();
  const firebase = useFirebase();

  const loginUser = async (email, password) => {
    const success = await firebase.loginUser(email, password);

    if (success) {
      history.push(ROUTES.LANDING);
    }
  };

  return (
    <Layout>
      <LoginForm loginUser={loginUser} error={firebase.error} />
    </Layout>
  );
};

export default SignIn;
