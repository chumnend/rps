import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Navigation from '../Navigation';
import * as Styles from './styles';

const Header = (props) => {
  return (
    <Styles.Header>
      <Styles.Container>
        <Logo />
        <Navigation auth={props.auth} />
      </Styles.Container>
    </Styles.Header>
  );
};

Header.propTypes = {
  auth: PropTypes.object,
};

export default Header;
