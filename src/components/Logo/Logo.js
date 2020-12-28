import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Logo = () => {
  return <Link to={ROUTES.LANDING}>Rock, Paper, Scissors!</Link>;
};

export default Logo;
