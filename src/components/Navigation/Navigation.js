import React from 'react';
import PropTypes from 'prop-types';
import * as ROUTES from '../../constants/routes';
import * as Styles from './styles';

const Navigation = (props) => {
  return (
    <Styles.Nav>
      <Styles.Ul>
        {props.auth.user && (
          <Styles.Li>
            <Styles.Icon to={ROUTES.ACCOUNT}>
              <i className="fas fa-user" />
              <p>Account</p>
            </Styles.Icon>
          </Styles.Li>
        )}
        {props.auth.user && props.auth.user.admin && (
          <Styles.Li>
            <Styles.Icon to={ROUTES.ADMIN}>
              <i className="fas fa-user-shield" />
              <p>Admin</p>
            </Styles.Icon>
          </Styles.Li>
        )}
        {props.auth.user && (
          <Styles.Li>
            <Styles.Icon to={ROUTES.LOGOUT}>
              <i className="fas fa-sign-out-alt" />
              <p>Sign Out</p>
            </Styles.Icon>
          </Styles.Li>
        )}

        {!props.auth.user && (
          <Styles.Li>
            <Styles.Icon to={ROUTES.SIGN_UP}>
              <i className="fas fa-user-plus" />
              <p>Sign Up</p>
            </Styles.Icon>
          </Styles.Li>
        )}
        {!props.auth.user && (
          <Styles.Li>
            <Styles.Icon to={ROUTES.SIGN_IN}>
              <i className="fas fa-sign-in-alt" />
              <p>Sign In</p>
            </Styles.Icon>
          </Styles.Li>
        )}
      </Styles.Ul>
    </Styles.Nav>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object,
};

export default Navigation;
