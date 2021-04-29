import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';
import * as GAME from '../../../../common/constants/game';
import Scoreboard from '../Scoreboard';

const MoveScreen = ({
  round,
  hostScore,
  challengerScore,
  hasMadeMove,
  handleMove,
}) => {
  return (
    <div>
      <Scoreboard
        round={round}
        hostScore={hostScore}
        challengerScore={challengerScore}
      />

      {hasMadeMove ? <p>Waiting for opponent</p> : <p>Make your move</p>}

      <Button onClick={() => handleMove(GAME.MOVE_ROCK)} disabled={hasMadeMove}>
        Rock
      </Button>
      <Button
        onClick={() => handleMove(GAME.MOVE_PAPER)}
        disabled={hasMadeMove}
      >
        Paper
      </Button>
      <Button
        onClick={() => handleMove(GAME.MOVE_SCISSOR)}
        disabled={hasMadeMove}
      >
        Scissor
      </Button>
    </div>
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
