import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Scoreboard = ({ round, hostScore, challengerScore }) => {
  return (
    <Styles.Container>
      <Styles.Score>{hostScore}</Styles.Score>
      <Styles.Round>Round {round}</Styles.Round>
      <Styles.Score>{challengerScore}</Styles.Score>
    </Styles.Container>
  );
};

Scoreboard.propTypes = {
  round: PropTypes.number,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
};

export default Scoreboard;
