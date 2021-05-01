import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Card = (props) => {
  if (!props.user) {
    return (
      <Styles.Card>
        <p>None</p>
      </Styles.Card>
    );
  }

  return (
    <Styles.Card>
      <h3>{props.user.username}</h3>
      <p>Wins: {props.user.wins}</p>
      <p>Losses: {props.user.losses}</p>
      <p>{props.isUser && '(YOU)'}</p>
    </Styles.Card>
  );
};

Card.propTypes = {
  user: PropTypes.object,
  isUser: PropTypes.bool,
};

export default Card;
