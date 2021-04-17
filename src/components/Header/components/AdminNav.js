import * as ROUTES from '../../../constants/routes';
import IconButton from '../../IconButton';
import * as Styles from '../styles';

const AdminNav = () => {
  return (
    <Styles.Nav role="navigation">
      <Styles.Ul>
        <Styles.Li>
          <IconButton
            classname="fas fa-user-shield"
            title="Admin"
            to={ROUTES.ADMIN}
          />
        </Styles.Li>
        <Styles.Li>
          <IconButton
            classname="fas fa-user"
            title="Account"
            to={ROUTES.ACCOUNT}
          />
        </Styles.Li>
        <Styles.Li>
          <IconButton
            classname="fas fa-sign-out-alt"
            title="Sign Out"
            to={ROUTES.LOGOUT}
          />
        </Styles.Li>
      </Styles.Ul>
    </Styles.Nav>
  );
};

export default AdminNav;
