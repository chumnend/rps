import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const NavIcon = (props) => {
  return (
    <Styles.Icon to={props.to} role="button">
      <i className={props.classname} />
      <p>{props.title}</p>
    </Styles.Icon>
  );
};

NavIcon.propTypes = {
  to: PropTypes.string,
  classname: PropTypes.string,
  title: PropTypes.string,
};

export default NavIcon;
