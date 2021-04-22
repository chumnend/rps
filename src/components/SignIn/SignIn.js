import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../common/components/Button';
import Form from '../../common/components/Form';
import Input from '../../common/components/Input';
import Link from '../../common/components/Link';
import Tag from '../../common/components/Tag';
import * as ROUTES from '../../common/constants/routes';
import useFirebase from '../../common/hooks/useFirebase';
import useInputState from '../../common/hooks/useInputState';
import Layout from './components/Layout';

const SignIn = () => {
  const [email, changeEmail] = useInputState('');
  const [password, changePassword] = useInputState('');
  const [error, setError] = useState(null);

  const history = useHistory();
  const firebase = useFirebase();

  const isInvalid = () => {
    return email === '' || password === '';
  };

  const onSubmit = (event) => {
    event.preventDefault();

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
      <Form onSubmit={onSubmit}>
        <Tag>Log in to your account and get playing!</Tag>

        {error && <p>{error.message}</p>}

        <Input
          label="Email"
          type="email"
          placeholder="Enter Email"
          id="email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          id="password"
          value={password}
          onChange={changePassword}
        />

        <Button theme="secondary" disabled={isInvalid()}>
          Sign In
        </Button>

        <Tag>
          Don&apos;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </Tag>

        <Tag>
          <Link to={ROUTES.PASSWORD_FORGET}>Forgot your password?</Link>
        </Tag>
      </Form>
    </Layout>
  );
};

export default SignIn;
