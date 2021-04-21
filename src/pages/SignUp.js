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
      .registerUser(email, password)
      .then((authUser) => {
        return firebase.getUser(authUser.user.uid).set({
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
    <PageContent>
      <Form onSubmit={onSubmit}>
        <Tag>Create an account to get started!</Tag>

        {error && <p>{error.message}</p>}

        <Input
          label="Username"
          type="text"
          placeholder="Enter Username"
          id="username"
          value={username}
          onChange={changeUsername}
        />
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
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your Password"
          id="password2"
          value={password2}
          onChange={changePassword2}
        />

        <Button theme="secondary" disabled={isInvalid()}>
          Sign up
        </Button>

        <Tag>
          Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </Tag>
      </Form>
    </PageContent>
  );
};

export default SignUp;
