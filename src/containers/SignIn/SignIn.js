import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import { useFirebase } from '../../store/firebase';
import * as ROUTES from '../../utils/constants/routes';
import useInputState from '../../utils/hooks/useInputState';

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
    <div>
      <h1>SignIn</h1>
      <Form onSubmit={onSubmit}>
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

        <p>
          Don&apos;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </p>

        <p>
          <Link to={ROUTES.PASSWORD_FORGET}>Forgot your password?</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignIn;
