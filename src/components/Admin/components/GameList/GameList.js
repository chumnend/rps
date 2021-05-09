import PropTypes from 'prop-types';

import * as Styles from './styles';

const GameList = ({ games }) => {
  let gamesList = <Styles.ListItem>No games have been found.</Styles.ListItem>;

  if (games.length > 0) {
    gamesList = games.map((g) => (
      <Styles.ListItem key={g.id}>
        {g.name} - {g.host.username}
      </Styles.ListItem>
    ));
  }

  return <Styles.List>{gamesList}</Styles.List>;
};

GameList.propTypes = {
  games: PropTypes.array,
};

export default GameList;
