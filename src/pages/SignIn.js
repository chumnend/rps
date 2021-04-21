import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Link from '../components/Link';
import PageContent from '../components/PageContent';
import Tag from '../components/Tag';
import * as ROUTES from '../constants/routes';
import useFirebase from '../hooks/useFirebase';
import useInputState from '../hooks/useInputState';

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
    <PageContent>
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
    </PageContent>
  );
};

export default SignIn;
