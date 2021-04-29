import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';
import * as GAME from '../../../../common/constants/game';
import Scoreboard from '../Scoreboard';

const GameOverScreen = ({
  round,
  roundResult,
  hostScore,
  challengerScore,
  isHost,
  onReadyUp,
  isReady,
  onLeave,
}) => {
  return (
    <div>
      <Scoreboard
        round={round}
        hostScore={hostScore}
        challengerScore={challengerScore}
      />

      {isHost && roundResult === GAME.RESULT_HOST_WIN && (
        <p>Game Over, You win!</p>
      )}
      {!isHost && roundResult === GAME.RESULT_HOST_WIN && (
        <p>Game Over, You lose!</p>
      )}
      {isHost && roundResult === GAME.RESULT_CHALLENGER_WIN && (
        <p>Game Over, You lose!</p>
      )}
      {!isHost && roundResult === GAME.RESULT_CHALLENGER_WIN && (
        <p>Game Over, You win!</p>
      )}

      <Button onClick={() => onReadyUp()} disabled={isReady}>
        Rematch?
      </Button>

      <Button onClick={() => onLeave()}>Leave</Button>
    </div>
  );
};

GameOverScreen.propTypes = {
  round: PropTypes.number,
  roundResult: PropTypes.string,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
  isHost: PropTypes.bool,
  onReadyUp: PropTypes.func,
  isReady: PropTypes.bool,
  onLeave: PropTypes.func,
};

export default GameOverScreen;
