import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../themes';

const FormLink = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

const StyledLink = styled(Link)`
  color: ${color.black};

  &:hover {
    color: ${color.grey};
  }
`;

FormLink.propTypes = {
  children: PropTypes.node,
};

export default FormLink;
