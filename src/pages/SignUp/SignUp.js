import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import * as ROUTES from '../../constants/routes';
import useInputState from '../../hooks/useInputState';
import { useFirebase } from '../../store/firebase';

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
      .then(() => {
        history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <h1>SignUp</h1>
      <Form onSubmit={onSubmit}>
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

        <p>
          Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
