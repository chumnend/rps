import * as ROUTES from '../../../../../../common/constants/routes';
import NavIcon from '../NavIcon';
import * as Styles from './styles';

const UserNav = () => {
  return (
    <Styles.Nav role="navigation">
      <Styles.Ul>
        <Styles.Li>
          <NavIcon
            classname="fas fa-user"
            title="Account"
            to={ROUTES.ACCOUNT}
          />
        </Styles.Li>
        <Styles.Li>
          <NavIcon
            classname="fas fa-sign-out-alt"
            title="Sign Out"
            to={ROUTES.LOGOUT}
          />
        </Styles.Li>
      </Styles.Ul>
    </Styles.Nav>
  );
};

export default UserNav;
