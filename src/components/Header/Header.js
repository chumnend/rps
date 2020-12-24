import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Navigation from '../Navigation';

const Header = (props) => {
  return (
    <header>
      <Logo />
      <Navigation auth={props.auth} />
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.object,
};

export default Header;
