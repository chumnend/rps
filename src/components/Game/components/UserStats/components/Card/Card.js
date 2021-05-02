import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Card = (props) => {
  if (!props.user) {
    return (
      <Styles.Card>
        <p>Waiting for opponent...</p>
      </Styles.Card>
    );
  }

  return (
    <Styles.Card>
      <h3>{props.user.username}</h3>
      <p>
        W: {props.user.wins} - L: {props.user.losses}
      </p>
      <p>{props.isUser && '(YOU)'}</p>
    </Styles.Card>
  );
};

Card.propTypes = {
  user: PropTypes.object,
  isUser: PropTypes.bool,
};

export default Card;
