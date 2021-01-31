import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styled from 'styled-components';
import { color } from '../themes';

// Styles =================================================
const StyledGamesListItem = styled.div`
  width: 100%;
  background: ${color.white};
  padding: 0.5rem 1rem;
`;

const StyledTitle = styled.h3`
  font-size: 1.5rem;
`;

const StyledButtonRightAlign = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

// Component ==============================================
const GamesListItem = (props) => {
  const handleClick = () => {
    props.handleJoin(props.id);
  };

  return (
    <StyledGamesListItem>
      <StyledTitle>{props.name}</StyledTitle>
      <br />
      <StyledButtonRightAlign>
        <Button size="sm" theme="secondary" onClick={handleClick}>
          Join
        </Button>
      </StyledButtonRightAlign>
    </StyledGamesListItem>
  );
};

GamesListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  handleJoin: PropTypes.func,
};

export default GamesListItem;
