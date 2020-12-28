import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Button = (props) => {
  return (
    <Styles.Button size={props.size} {...props}>
      {props.children}
    </Styles.Button>
  );
};

Button.defaultProps = {
  size: 'md',
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;
