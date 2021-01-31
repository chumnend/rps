import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../themes';

const FormInput = (props) => {
  return (
    <StyledFormInput>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </StyledFormInput>
  );
};

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto 12px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  margin-bottom: 3px;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  border-color: ${color.grey};
  background: ${color.white};
  padding: 1rem 1.5rem;
  font-family: inherit;
  font-size: 1rem;
`;

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
