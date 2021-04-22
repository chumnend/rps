import React, { useState } from 'react';

import Button from '../../common/components/Button';
import Form from '../../common/components/Form';
import Input from '../../common/components/Input';
import Tag from '../../common/components/Tag';
import useFirebase from '../../common/hooks/useFirebase';
import useInputState from '../../common/hooks/useInputState';
import Layout from './components/Layout';

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
    <Layout>
      <PasswordForgetForm />
    </Layout>
  );
};

export default PasswordForget;
