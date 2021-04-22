import React, { useState } from 'react';

import Button from '../../common/components/Button';
import Form from '../../common/components/Form';
import Input from '../../common/components/Input';
import Tag from '../../common/components/Tag';
import useFirebase from '../../common/hooks/useFirebase';
import useInputState from '../../common/hooks/useInputState';
import Layout from './components/Layout';

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
        <Tag>Change your password</Tag>

        {error && <p>{error.message}</p>}

        <Input
          label="New Password"
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
          Change Password
        </Button>
      </Form>
    </div>
  );
};

const PasswordChange = () => {
  return (
    <Layout>
      <PasswordChangeForm />
    </Layout>
  );
};

export default PasswordChange;
