import React, { useState } from 'react';

import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import PageContent from '../components/PageContent';
import Tag from '../components/Tag';
import useFirebase from '../hooks/useFirebase';
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
        <Tag>Enter email to set new password</Tag>

        {error && <p>{error.message}</p>}

        <Input
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
    <PageContent>
      <PasswordForgetForm />
    </PageContent>
  );
};

export default PasswordForget;
