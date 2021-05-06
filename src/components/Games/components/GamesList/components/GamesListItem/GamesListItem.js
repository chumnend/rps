import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const GamesListItem = (props) => {
  const handleClick = () => {
    props.handleJoin(props.id);
  };

  return (
    <Styles.GamesListItem>
      <Styles.Title>{props.name}</Styles.Title>
      <br />
      <Styles.ButtonRightAlign>
        <Styles.Button onClick={handleClick}>Join</Styles.Button>
      </Styles.ButtonRightAlign>
    </Styles.GamesListItem>
  );
};

GamesListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  handleJoin: PropTypes.func,
};

export default GamesListItem;
