import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import FormLink from '../../components/FormLink';
import FormTag from '../../components/FormTag';
import Link from '../../components/Link';
import Page from '../../components/Page';
import { useFirebase } from '../../store/firebase';
import * as ROUTES from '../../constants/routes';
import useInputState from '../../hooks/useInputState';

const SignUp = () => {
  const [username, changeUsername] = useInputState('');
  const [email, changeEmail] = useInputState('');
  const [password, changePassword] = useInputState('');
  const [password2, changePassword2] = useInputState('');
  const [error, setError] = useState(null);

  const history = useHistory();
  const firebase = useFirebase();

  const isInvalid = () => {
    return (
      username === '' ||
      email === '' ||
      password === '' ||
      password !== password2
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();

    firebase
      .register(email, password)
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          id: authUser.user.uid,
          username,
          email,
          wins: 0,
          losses: 0,
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
    <Page>
      <Form onSubmit={onSubmit}>
        <FormTag>Create an account to get started!</FormTag>

        {error && <p>{error.message}</p>}

        <FormInput
          label="Username"
          type="text"
          placeholder="Enter Username"
          id="username"
          value={username}
          onChange={changeUsername}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your Password"
          id="password2"
          value={password2}
          onChange={changePassword2}
        />

        <Button disabled={isInvalid()}>Sign up</Button>

        <FormTag>
          Already have an account?{' '}
          <FormLink to={ROUTES.SIGN_IN}>Sign In</FormLink>
        </FormTag>
      </Form>
    </Page>
  );
};

export default SignUp;
