import PropTypes from 'prop-types';
import React from 'react';

import * as ROUTES from '../../constants/routes';
import Icon from '../Icon';
import * as Styles from './styles';

const Header = ({ user }) => {
  return (
    <Styles.Header>
      <Styles.Container>
        <Icon classname="fas fa-home" title="Home" to={ROUTES.LANDING} />
        <Styles.Nav>
          <Styles.Ul>
            {user && (
              <Styles.Li>
                <Icon
                  classname="fas fa-user"
                  title="Account"
                  to={ROUTES.ACCOUNT}
                />
              </Styles.Li>
            )}
            {user && user.admin && (
              <Styles.Li>
                <Icon
                  classname="fas fa-user-shield"
                  title="Admin"
                  to={ROUTES.ADMIN}
                />
              </Styles.Li>
            )}
            {user && (
              <Styles.Li>
                <Icon
                  classname="fas fa-sign-out-alt"
                  title="Sign Out"
                  to={ROUTES.LOGOUT}
                />
              </Styles.Li>
            )}

            {!user && (
              <Styles.Li>
                <Icon
                  classname="fas fa-user-plus"
                  title="Sign Up"
                  to={ROUTES.SIGN_UP}
                />
              </Styles.Li>
            )}
            {!user && (
              <Styles.Li>
                <Icon
                  classname="fas fa-sign-in-alt"
                  title="Sign In"
                  to={ROUTES.SIGN_IN}
                />
              </Styles.Li>
            )}
          </Styles.Ul>
        </Styles.Nav>
      </Styles.Container>
    </Styles.Header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
