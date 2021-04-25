import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as ROUTES from '../../common/constants/routes';
import useFirebase from '../../common/hooks/useFirebase';
import Layout from './components/Layout';
import RegisterForm from './components/RegisterForm';

const SignUp = () => {
  const [error, setError] = useState(null);

  const history = useHistory();
  const firebase = useFirebase();

  const registerUser = (username, email, password) => {
    firebase
      .registerUser(email, password)
      .then((authUser) => {
        return firebase.getUser(authUser.user.uid).set({
          id: authUser.user.uid,
          username,
          email,
          wins: 0,
          losses: 0,
          admin: false,
        });
      })
      .then(() => {
        history.push(ROUTES.ACCOUNT);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Layout>
      <RegisterForm registerUser={registerUser} error={error?.message} />
    </Layout>
  );
};

export default SignUp;
