import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Button = (props) => {
  return <Styles.Button {...props}>{props.children}</Styles.Button>;
};

Button.defaultProps = {
  theme: 'primary',
};

Button.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;
