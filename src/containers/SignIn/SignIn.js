import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import FormLink from '../../components/FormLink';
import FormTag from '../../components/FormTag';
import Page from '../../components/Page';
import { useFirebase } from '../../store/firebase';
import * as ROUTES from '../../constants/routes';
import useInputState from '../../hooks/useInputState';

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
      .login(email, password)
      .then(() => {
        history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Page>
      <Form onSubmit={onSubmit}>
        <FormTag>Log in to your account and get playing!</FormTag>

        {error && <p>{error.message}</p>}

        <FormInput
          label="Email"
          type="email"
          placeholder="Enter Email"
          id="email"
          value={email}
          onChange={changeEmail}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter Password"
          id="password"
          value={password}
          onChange={changePassword}
        />

        <Button disabled={isInvalid()}>Sign In</Button>

        <FormTag>
          Don&apos;t have an account?{' '}
          <FormLink to={ROUTES.SIGN_UP}>Sign Up</FormLink>
        </FormTag>

        <FormTag>
          <FormLink to={ROUTES.PASSWORD_FORGET}>Forgot your password?</FormLink>
        </FormTag>
      </Form>
    </Page>
  );
};

export default SignIn;
