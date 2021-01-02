import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const FormInput = (props) => {
  return (
    <Styles.FormInput>
      <Styles.Label htmlFor={props.id}>{props.label}</Styles.Label>
      <Styles.Input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </Styles.FormInput>
  );
};

FormInput.defaultProps = {
  type: 'text',
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
