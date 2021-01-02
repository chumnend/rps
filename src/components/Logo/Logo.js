import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Logo = () => {
  return (
    <Link to={ROUTES.LANDING}>
      <i className="fas fa-gamepad" />
      <p>RPS Duels</p>
    </Link>
  );
};

export default Logo;
