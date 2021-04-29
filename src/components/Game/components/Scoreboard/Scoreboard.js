import PropTypes from 'prop-types';
import React from 'react';

const Scoreboard = (props) => {
  return (
    <div>
      <p>Round {props.round}</p>
      <p>
        {props.hostScore} - {props.challengerScore}
      </p>
    </div>
  );
};

Scoreboard.propTypes = {
  round: PropTypes.number,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
};

export default Scoreboard;
