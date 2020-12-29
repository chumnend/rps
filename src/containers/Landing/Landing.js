import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  return (
    <div>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
  );
};

export default Landing;
