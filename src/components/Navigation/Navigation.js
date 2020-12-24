import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import * as ROUTES from '../../constants/routes';

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>Home</Link>
        </li>
        {props.auth.user && (
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
        )}
        {props.auth.user && (
          <li>
            <SignOutButton />
          </li>
        )}
        {!props.auth.user && (
          <li>
            <Link to={ROUTES.SIGN_UP}>Register</Link>
          </li>
        )}
        {!props.auth.user && (
          <li>
            <Link to={ROUTES.SIGN_IN}>Login</Link>
          </li>
        )}
        {props.auth.user && props.auth.user.admin && (
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object,
};

export default Navigation;
