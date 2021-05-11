import PropTypes from 'prop-types';

import * as Styles from './styles';

const GameList = ({ games, deleteGame }) => {
  let gamesList = <Styles.ListItem>No games have been found.</Styles.ListItem>;

  if (games.length > 0) {
    gamesList = games.map((g) => (
      <Styles.ListItem key={g.id}>
        <Styles.Card>
          <p>{g.name}</p>
        </Styles.Card>
        <Styles.Button onClick={() => deleteGame(g.id)}>Delete</Styles.Button>
      </Styles.ListItem>
    ));
  }

  return <Styles.List>{gamesList}</Styles.List>;
};

GameList.propTypes = {
  games: PropTypes.array,
  deleteGame: PropTypes.func,
};

export default GameList;
