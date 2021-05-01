import PropTypes from 'prop-types';
import React from 'react';

import Card from './components/Card';
import Container from './components/Container';

const UserStats = (props) => {
  return (
    <Container>
      <Card user={props.host} isUser={props.isHost} />
      <p>VS.</p>
      <Card user={props.challenger} isUser={!props.isHost} />
    </Container>
  );
};

UserStats.propTypes = {
  host: PropTypes.object,
  challenger: PropTypes.object,
  isHost: PropTypes.bool,
};

export default UserStats;
