import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as Styles from './styles';

const Navigation = (props) => {
  return (
    <Styles.Nav>
      <Styles.Ul>
        {props.auth.user && (
          <li>
            <Link to={ROUTES.ACCOUNT}>
              <i className="fas fa-user" />
              <p>Account</p>
            </Link>
          </li>
        )}
        {props.auth.user && props.auth.user.admin && (
          <li>
            <Link to={ROUTES.ADMIN}>
              <i className="fas fa-user-shield" />
              <p>Admin</p>
            </Link>
          </li>
        )}
        {props.auth.user && (
          <li>
            <Link to={ROUTES.LOGOUT}>
              <i className="fas fa-sign-out-alt" />
              <p>Sign Out</p>
            </Link>
          </li>
        )}

        {!props.auth.user && (
          <li>
            <Link to={ROUTES.SIGN_UP}>
              <i className="fas fa-user-plus" />
              <p>Sign Up</p>
            </Link>
          </li>
        )}
        {!props.auth.user && (
          <li>
            <Link to={ROUTES.SIGN_IN}>
              <i className="fas fa-sign-in-alt" />
              <p>Sign In</p>
            </Link>
          </li>
        )}
      </Styles.Ul>
    </Styles.Nav>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object,
};

export default Navigation;
