import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const GameScoreboard = (props) => {
  return (
    <Styles.GameScoreboard>
      <p>Round {props.round}</p>
      <p>
        {props.hostScore} - {props.challengerScore}
      </p>
    </Styles.GameScoreboard>
  );
};

GameScoreboard.propTypes = {
  round: PropTypes.number,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
};

export default GameScoreboard;
