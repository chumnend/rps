import React, { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormTag from '../components/FormTag';
import Page from '../components/Page';
import { useFirebase } from '../store/firebase';
import useInputState from '../hooks/useInputState';

export const PasswordForgetForm = () => {
  const [email, changeEmail] = useInputState('');
  const [error, setError] = useState(null);

  const firebase = useFirebase();

  const isInvalid = () => {
    return email === '';
  };

  const onSubmit = (event) => {
    event.preventDefault();

    firebase
      .resetPassword(email)
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
        <FormTag>Enter email to set new password</FormTag>

        {error && <p>{error.message}</p>}

        <FormInput
          label="Email"
          type="email"
          placeholder="Enter Email"
          id="email"
          value={email}
          onChange={changeEmail}
        />

        <Button theme="secondary" disabled={isInvalid()}>
          Reset Password
        </Button>
      </Form>
    </div>
  );
};

const PasswordForget = () => {
  return (
    <Page>
      <PasswordForgetForm />
    </Page>
  );
};

export default PasswordForget;
