import React, { useState } from 'react';

import Button from '../components/Button';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormTag from '../components/FormTag';
import Page from '../components/Page';
import useFirebase from '../hooks/useFirebase';
import useInputState from '../hooks/useInputState';

export const PasswordChangeForm = () => {
  const [password, changePassword] = useInputState('');
  const [password2, changePassword2] = useInputState('');
  const [error, setError] = useState(null);

  const firebase = useFirebase();

  const isInvalid = () => {
    return password === '' || password !== password2;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    firebase
      .updatePassword(password)
      .then(() => {
        console.log('done');
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormTag>Change your password</FormTag>

        {error && <p>{error.message}</p>}

        <FormInput
          label="New Password"
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

        <Button theme="secondary" disabled={isInvalid()}>
          Change Password
        </Button>
      </Form>
    </div>
  );
};

const PasswordChange = () => {
  return (
    <Page>
      <PasswordChangeForm />
    </Page>
  );
};

export default PasswordChange;
