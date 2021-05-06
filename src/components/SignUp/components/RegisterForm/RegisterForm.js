import PropTypes from 'prop-types';

import * as ROUTES from '../../../../common/constants/routes';
import useInputState from '../../../../common/hooks/useInputState';
import * as Styles from './styles';

const RegisterForm = ({ registerUser, error }) => {
  const [username, changeUsername] = useInputState('');
  const [email, changeEmail] = useInputState('');
  const [password, changePassword] = useInputState('');
  const [password2, changePassword2] = useInputState('');

  const isInvalid = () => {
    return (
      username === '' ||
      email === '' ||
      password === '' ||
      password !== password2
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();

    registerUser(username, email, password);
  };

  return (
    <Styles.Form onSubmit={onSubmit}>
      <Styles.Text>Create an account to get started!</Styles.Text>

      {error && <p>{error}</p>}

      <Styles.InputContainer>
        <Styles.Label htmlFor="username">Username</Styles.Label>
        <Styles.Input
          type="username"
          placeholder="Enter Username"
          id="username"
          value={username}
          onChange={changeUsername}
        />
      </Styles.InputContainer>

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

      <Styles.Button disabled={isInvalid()}>Sign up</Styles.Button>

      <Styles.Text>
        Already have an account?{' '}
        <Styles.Link to={ROUTES.SIGN_IN}>Sign In</Styles.Link>
      </Styles.Text>
    </Styles.Form>
  );
};

RegisterForm.propTypes = {
  registerUser: PropTypes.func,
  error: PropTypes.string,
};

export default RegisterForm;
