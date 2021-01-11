import React from 'react';
import PropTypes from 'prop-types';
import GameUserStatsCard from '../GameUserStatsCard';
import * as Styles from './styles';

const GameUserStats = (props) => {
  return (
    <Styles.GameUserStats>
      <GameUserStatsCard user={props.host} isUser={props.isHost} />
      <p>VS.</p>
      <GameUserStatsCard user={props.challenger} isUser={!props.isHost} />
    </Styles.GameUserStats>
  );
};

GameUserStats.propTypes = {
  host: PropTypes.object,
  challenger: PropTypes.object,
  isHost: PropTypes.bool,
};

export default GameUserStats;
