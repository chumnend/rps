import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../themes';

const ListItem = (props) => {
  return <StyledListItem>{props.children}</StyledListItem>;
};

const StyledListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media all and (min-width: ${device.md}) {
    font-size: 1.5rem;
  }

  @media all and (min-width: ${device.xl}) {
    font-size: 2rem;
  }
`;

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;