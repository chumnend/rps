import PropTypes from 'prop-types';
import React from 'react';

import GamesListItem from './components/GamesListItem';
import * as Styles from './styles';

const GamesList = (props) => {
  if (props.games.length === 0) {
    return <Styles.Text>No games have been created.</Styles.Text>;
  }

  return (
    <Styles.GamesList>
      {props.games.map((g) => (
        <GamesListItem
          key={g.id}
          id={g.id}
          name={g.name}
          handleJoin={props.handleJoin}
        />
      ))}
    </Styles.GamesList>
  );
};

GamesList.propTypes = {
  games: PropTypes.array,
  handleJoin: PropTypes.func,
};

export default GamesList;
