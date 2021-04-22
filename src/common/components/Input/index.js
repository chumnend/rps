import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Input = (props) => {
  return (
    <Styles.InputContainer>
      <Styles.Label htmlFor={props.id}>{props.label}</Styles.Label>
      <Styles.Input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </Styles.InputContainer>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
