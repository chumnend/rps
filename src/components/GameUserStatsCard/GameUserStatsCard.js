import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const GameUserStatsCard = (props) => {
  if (!props.user) {
    return (
      <Styles.GameUserStatsCard>
        <p>None</p>
      </Styles.GameUserStatsCard>
    );
  }

  return (
    <Styles.GameUserStatsCard>
      <h3>{props.user.username}</h3>
      <p>Wins: {props.user.wins}</p>
      <p>Losses: {props.user.losses}</p>
      <p>{props.isUser && '(YOU)'}</p>
    </Styles.GameUserStatsCard>
  );
};

GameUserStatsCard.propTypes = {
  user: PropTypes.object,
  isUser: PropTypes.bool,
};

export default GameUserStatsCard;
