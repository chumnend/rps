import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Link = (props) => {
  return <Styles.CustomLink {...props}>{props.children}</Styles.CustomLink>;
};

Link.propTypes = {
  children: PropTypes.node,
};

export default Link;
