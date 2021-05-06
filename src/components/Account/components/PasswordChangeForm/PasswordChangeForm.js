import PropTypes from 'prop-types';

import useInputState from '../../../../common/hooks/useInputState';
import * as Styles from './styles';

const PasswordChangeForm = ({ updatePassword, error }) => {
  const [password, changePassword] = useInputState('');
  const [password2, changePassword2] = useInputState('');

  const isInvalid = () => {
    return password === '' || password !== password2;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updatePassword(password);
  };

  return (
    <div>
      <Styles.Form onSubmit={onSubmit}>
        <Styles.Text>Change your password</Styles.Text>

        {error && <p>{error}</p>}

        <Styles.InputContainer>
          <Styles.Label htmlFor="password">Password</Styles.Label>
          <Styles.Input
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={changePassword}
          />
        </Styles.InputContainer>

        <Styles.InputContainer>
          <Styles.Label htmlFor="password2">Confirm Password</Styles.Label>
          <Styles.Input
            type="password"
            placeholder="Confirm Password"
            id="password2"
            value={password2}
            onChange={changePassword2}
          />
        </Styles.InputContainer>

        <Styles.Button disabled={isInvalid()}>Change Password</Styles.Button>
      </Styles.Form>
    </div>
  );
};

PasswordChangeForm.propTypes = {
  updatePassword: PropTypes.func,
  error: PropTypes.string,
};

export default PasswordChangeForm;
