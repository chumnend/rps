import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../themes';

// Styles =================================================
const StyledGameUserStatsCard = styled.div`
  height: auto;
  padding: 1rem;
  background: ${color.white};
`;

// Component ==============================================
const GameUserStatsCard = (props) => {
  if (!props.user) {
    return (
      <StyledGameUserStatsCard>
        <p>None</p>
      </StyledGameUserStatsCard>
    );
  }

  return (
    <StyledGameUserStatsCard>
      <h3>{props.user.username}</h3>
      <p>Wins: {props.user.wins}</p>
      <p>Losses: {props.user.losses}</p>
      <p>{props.isUser && '(YOU)'}</p>
    </StyledGameUserStatsCard>
  );
};

GameUserStatsCard.propTypes = {
  user: PropTypes.object,
  isUser: PropTypes.bool,
};

export default GameUserStatsCard;
