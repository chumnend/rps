import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import * as ROUTES from '../../constants/routes';
import * as Styles from './styles';

const Header = (props) => {
  return (
    <Styles.Header>
      <Styles.Container>
        <Icon classname="fas fa-home" title="Home" to={ROUTES.LANDING} />
        <Styles.Nav>
          <Styles.Ul>
            {props.auth.user && (
              <Styles.Li>
                <Icon
                  classname="fas fa-user"
                  title="Account"
                  to={ROUTES.ACCOUNT}
                />
              </Styles.Li>
            )}
            {props.auth.user && props.auth.user.admin && (
              <Styles.Li>
                <Icon
                  classname="fas fa-user-shield"
                  title="Admin"
                  to={ROUTES.ADMIN}
                />
              </Styles.Li>
            )}
            {props.auth.user && (
              <Styles.Li>
                <Icon
                  classname="fas fa-sign-out-alt"
                  title="Sign Out"
                  to={ROUTES.LOGOUT}
                />
              </Styles.Li>
            )}

            {!props.auth.user && (
              <Styles.Li>
                <Icon
                  classname="fas fa-user-plus"
                  title="Sign Up"
                  to={ROUTES.SIGN_UP}
                />
              </Styles.Li>
            )}
            {!props.auth.user && (
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
  auth: PropTypes.object,
};

export default Header;
