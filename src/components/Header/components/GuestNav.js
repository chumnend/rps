import * as ROUTES from '../../../constants/routes';
import IconButton from '../../IconButton';
import * as Styles from '../styles';

const GuestNav = () => {
  return (
    <Styles.Nav role="navigation">
      <Styles.Ul>
        <Styles.Li>
          <IconButton
            classname="fas fa-user-plus"
            title="Sign Up"
            to={ROUTES.SIGN_UP}
          />
        </Styles.Li>
        <Styles.Li>
          <IconButton
            classname="fas fa-sign-in-alt"
            title="Sign In"
            to={ROUTES.SIGN_IN}
          />
        </Styles.Li>
      </Styles.Ul>
    </Styles.Nav>
  );
};

export default GuestNav;
