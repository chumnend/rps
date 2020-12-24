import React, { useState } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import { useFirebase } from '../../store/firebase';
import useInputState from '../../hooks/useInputState';

const PasswordForget = () => {
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
      <h1>PasswordForget</h1>
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

        <Button disabled={isInvalid()}>Reset Password</Button>
      </Form>
    </div>
  );
};

export default PasswordForget;
