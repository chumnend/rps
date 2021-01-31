import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../themes';

const ListTitle = (props) => {
  return <StyledListTitle>{props.children}</StyledListTitle>;
};

const StyledListTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;

  @media all and (min-width: ${device.md}) {
    font-size: 3rem;
  }

  @media all and (min-width: ${device.xl}) {
    font-size: 4rem;
  }
`;

ListTitle.propTypes = {
  children: PropTypes.node,
};

export default ListTitle;
