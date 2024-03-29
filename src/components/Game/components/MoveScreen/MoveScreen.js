import PropTypes from 'prop-types';

import * as GAME from '../../../../common/constants/game';
import Scoreboard from '../Scoreboard';
import * as Styles from './styles';

const MoveScreen = ({
  round,
  hostScore,
  challengerScore,
  hasMadeMove,
  handleMove,
}) => {
  return (
    <Styles.Container>
      <Scoreboard
        round={round}
        hostScore={hostScore}
        challengerScore={challengerScore}
      />

      {hasMadeMove ? (
        <Styles.Heading>Waiting for opponent</Styles.Heading>
      ) : (
        <Styles.Heading>Make your move</Styles.Heading>
      )}

      <Styles.ButtonContainer>
        <Styles.Button
          onClick={() => handleMove(GAME.MOVE_ROCK)}
          disabled={hasMadeMove}
        >
          Rock
        </Styles.Button>
        <Styles.Button
          onClick={() => handleMove(GAME.MOVE_PAPER)}
          disabled={hasMadeMove}
        >
          Paper
        </Styles.Button>
        <Styles.Button
          onClick={() => handleMove(GAME.MOVE_SCISSOR)}
          disabled={hasMadeMove}
        >
          Scissor
        </Styles.Button>
      </Styles.ButtonContainer>
    </Styles.Container>
  );
};

MoveScreen.propTypes = {
  round: PropTypes.number,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
  hasMadeMove: PropTypes.bool,
  handleMove: PropTypes.func,
};

export default MoveScreen;
