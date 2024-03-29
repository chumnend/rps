import PropTypes from 'prop-types';

import * as ROUTES from '../../../../common/constants/routes';
import useInputState from '../../../../common/hooks/useInputState';
import * as Styles from './styles';

const LoginForm = ({ loginUser, error }) => {
  const [email, changeEmail] = useInputState('');
  const [password, changePassword] = useInputState('');

  const isInvalid = () => {
    return email === '' || password === '';
  };

  const onSubmit = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

  return (
    <Styles.Form onSubmit={onSubmit}>
      <Styles.Text>Log in to your account and get playing!</Styles.Text>

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

      <Styles.Button disabled={isInvalid()}>Sign In</Styles.Button>

      <Styles.Text>
        Don&apos;t have an account?{' '}
        <Styles.Link to={ROUTES.SIGN_UP}>Sign Up</Styles.Link>
      </Styles.Text>

      <Styles.Text>
        <Styles.Link to={ROUTES.PASSWORD_FORGET}>
          Forgot your password?
        </Styles.Link>
      </Styles.Text>
    </Styles.Form>
  );
};

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  error: PropTypes.string,
};

export default LoginForm;
