import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as ROUTES from '../../common/constants/routes';
import useFirebase from '../../common/hooks/useFirebase';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';

const SignIn = () => {
  const [error, setError] = useState(null);

  const history = useHistory();
  const firebase = useFirebase();

  const login = (email, password) => {
    firebase
      .loginUser(email, password)
      .then(() => {
        history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Layout>
      <LoginForm login={login} error={error?.message} />
    </Layout>
  );
};

export default SignIn;
