import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { color } from '../themes';

// Style ==================================================
const StyledLink = styled(Link)`
  color: ${color.black};

  &:hover {
    color: ${color.grey};
  }
`;

// Comppnent ==============================================
const FormLink = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

FormLink.propTypes = {
  children: PropTypes.node,
};

export default FormLink;
