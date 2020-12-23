import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import * as ROUTES from '../../constants/routes';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_IN}>Log In</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
