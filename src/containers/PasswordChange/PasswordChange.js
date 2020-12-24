import React, { useState } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import { useFirebase } from '../../store/firebase';
import useInputState from '../../utils/hooks/useInputState';

const PasswordChange = () => {
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
      <h1>PasswordChange</h1>
      <Form onSubmit={onSubmit}>
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

        <Button disabled={isInvalid()}>Change Password</Button>
      </Form>
    </div>
  );
};

export default PasswordChange;
