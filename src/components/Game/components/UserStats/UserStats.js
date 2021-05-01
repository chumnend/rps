import PropTypes from 'prop-types';
import React from 'react';

import Card from './components/Card';
import Container from './components/Container';
import VersusIcon from './components/VersusIcon';

const UserStats = ({ host, challenger, isHost }) => {
  return (
    <Container>
      <Card user={host} isUser={isHost} />
      <VersusIcon />
      <Card user={challenger} isUser={!isHost} />
    </Container>
  );
};

UserStats.propTypes = {
  host: PropTypes.object,
  challenger: PropTypes.object,
  isHost: PropTypes.bool,
};

export default UserStats;
