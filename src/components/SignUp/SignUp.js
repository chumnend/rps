import React from 'react';
import { useHistory } from 'react-router-dom';

import * as ROUTES from '../../common/constants/routes';
import useFirebase from '../../common/hooks/useFirebase';
import Layout from './components/Layout';
import RegisterForm from './components/RegisterForm';

const SignUp = () => {
  const history = useHistory();
  const firebase = useFirebase();

  const registerUser = async (username, email, password) => {
    await firebase.registerUser(username, email, password);

    if (!firebase.user) {
      history.push(ROUTES.ACCOUNT);
    }
  };

  return (
    <Layout>
      <RegisterForm registerUser={registerUser} error={firebase.error} />
    </Layout>
  );
};

export default SignUp;
