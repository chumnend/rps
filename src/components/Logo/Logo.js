import React from 'react';
import * as ROUTES from '../../constants/routes';
import * as Styles from './styles';

const Logo = () => {
  return (
    <Styles.Icon to={ROUTES.LANDING}>
      <i className="fas fa-gamepad" />
      <p>RPS Duels</p>
    </Styles.Icon>
  );
};

export default Logo;
