import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../themes';

// Styles =================================================
export const StyledList = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
  color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Component ==============================================
const List = (props) => {
  return <StyledList>{props.children}</StyledList>;
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
