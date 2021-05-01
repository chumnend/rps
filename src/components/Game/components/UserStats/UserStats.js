import PropTypes from 'prop-types';
import React from 'react';

import Card from './components/Card';
import * as Styles from './styles';

const UserStats = ({ host, challenger, isHost }) => {
  return (
    <Styles.Container>
      <Card user={host} isUser={isHost} />
      <Styles.VersusIcon>VS</Styles.VersusIcon>
      <Card user={challenger} isUser={!isHost} />
    </Styles.Container>
  );
};

UserStats.propTypes = {
  host: PropTypes.object,
  challenger: PropTypes.object,
  isHost: PropTypes.bool,
};

export default UserStats;
