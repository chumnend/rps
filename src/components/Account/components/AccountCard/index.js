import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const AccountCard = (props) => {
  return (
    <Styles.Container>
      <h3>Account Details</h3>
      <p>Username: {props.user.username}</p>
      <p>Email: {props.user.email}</p>
      <br />
      <h3>Statistics</h3>
      <p>Wins: {props.user.wins}</p>
      <p>Losses: {props.user.losses}</p>
    </Styles.Container>
  );
};

AccountCard.propTypes = {
  user: PropTypes.object,
};

export default AccountCard;
