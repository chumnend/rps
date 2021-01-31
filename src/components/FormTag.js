import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormTag = (props) => {
  return <StyledFormTag>{props.children}</StyledFormTag>;
};

const StyledFormTag = styled.p`
  margin: 0.8rem 0;
  text-align: center;
`;

FormTag.propTypes = {
  children: PropTypes.node,
};

export default FormTag;
