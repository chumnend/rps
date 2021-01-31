import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '../themes';

// Styles =================================================
const StyledButton = styled.button`
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;

  &:disabled {
    background: ${color.grey};
    color: ${color.white};
    font-weight: 500;
    border: 1px solid ${color.grey};
    box-shadow: none;
    cursor: not-allowed;
  }

  // Button Size
  ${(props) => {
    if (props.size === 'sm') {
      return `
        padding: 0.8rem 1rem;
        font-size: 0.8rem;
      `;
    } else if (props.size === 'lg') {
      return `
        padding: 1.5rem 2.5rem;
        font-size: 1.4rem;
      `;
    } else {
      return `
        padding: 1rem 2rem;
        font-size: 1rem;
      `;
    }
  }}

  // Background Color
  ${(props) => {
    if (props.theme === 'secondary') {
      return `
        background: ${color.lightblue};
        color: ${color.white};
        border: 1px solid ${color.lightblue};
      `;
    } else if (props.theme === 'tertiary') {
      return `
        background: none;
        color: ${color.black};
        border: 1px solid ${color.black};
      `;
    } else {
      return `
        background: ${color.white};
        color: ${color.black};
        border: 1px solid ${color.white};
      `;
    }
  }}
`;

// Component ==============================================
const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
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
