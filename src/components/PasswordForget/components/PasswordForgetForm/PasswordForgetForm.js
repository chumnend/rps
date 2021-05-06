import PropTypes from 'prop-types';

import useInputState from '../../../../common/hooks/useInputState';
import * as Styles from './styles';

const PasswordForgetForm = ({ resetPassword, error }) => {
  const [email, changeEmail] = useInputState('');

  const isInvalid = () => {
    return email === '';
  };

  const onSubmit = (event) => {
    event.preventDefault();

    resetPassword(email);
  };

  return (
    <div>
      <Styles.Form onSubmit={onSubmit}>
        <Styles.Text>Enter email to set new password</Styles.Text>

        {error && <p>{error}</p>}

        <Styles.InputContainer>
          <Styles.Label htmlFor="email">Email</Styles.Label>
          <Styles.Input
            type="email"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={changeEmail}
          />
        </Styles.InputContainer>

        <Styles.Button disabled={isInvalid()}>Reset Password</Styles.Button>
      </Styles.Form>
    </div>
  );
};

PasswordForgetForm.propTypes = {
  resetPassword: PropTypes.func,
  error: PropTypes.string,
};

export default PasswordForgetForm;
