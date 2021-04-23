import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import GameUserStatsCard from './components/UserStatsCard';

// Styles =================================================
const StyledGameUserStats = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// Component ==============================================
const GameUserStats = (props) => {
  return (
    <StyledGameUserStats>
      <GameUserStatsCard user={props.host} isUser={props.isHost} />
      <p>VS.</p>
      <GameUserStatsCard user={props.challenger} isUser={!props.isHost} />
    </StyledGameUserStats>
  );
};

GameUserStats.propTypes = {
  host: PropTypes.object,
  challenger: PropTypes.object,
  isHost: PropTypes.bool,
};

export default GameUserStats;
