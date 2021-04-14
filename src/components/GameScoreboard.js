import PropTypes from 'prop-types';
import React from 'react';

// Component ==============================================
const GameScoreboard = (props) => {
  return (
    <div>
      <p>Round {props.round}</p>
      <p>
        {props.hostScore} - {props.challengerScore}
      </p>
    </div>
  );
};

GameScoreboard.propTypes = {
  round: PropTypes.number,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
};

export default GameScoreboard;
