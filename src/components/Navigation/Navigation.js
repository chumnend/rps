import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import * as ROUTES from '../../constants/routes';
import * as Styles from './styles';

const Navigation = (props) => {
  return (
    <Styles.Nav>
      <Styles.Ul>
        {props.auth.user && (
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
        )}
        {props.auth.user && props.auth.user.admin && (
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
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
      </Styles.Ul>
    </Styles.Nav>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object,
};

export default Navigation;
