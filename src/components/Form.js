import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { color, device } from '../themes';

// Styles =================================================
const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  background: ${color.white};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: ${device.md}) {
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
  }

  @media all and (min-width: ${device.lg}) {
    width: 60%;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

// Component ==============================================
const Form = (props) => {
  return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>;
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
