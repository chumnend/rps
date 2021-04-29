import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';
import * as GAME from '../../../../common/constants/game';
import Scoreboard from '../Scoreboard';

const ResultScreen = ({
  round,
  roundResult,
  hostScore,
  challengerScore,
  hostMove,
  challengerMove,
  isHost,
  onReadyUp,
  isReady,
}) => {
  return (
    <div>
      <Scoreboard
        round={round}
        hostScore={hostScore}
        challengerScore={challengerScore}
      />

      <div>
        {hostMove} - {challengerMove}
      </div>

      {isHost && roundResult === GAME.RESULT_HOST_WIN && (
        <p>You win this round!</p>
      )}
      {!isHost && roundResult === GAME.RESULT_HOST_WIN && (
        <p>You lost this round!</p>
      )}
      {isHost && roundResult === GAME.RESULT_CHALLENGER_WIN && (
        <p>You lost this round!</p>
      )}
      {!isHost && roundResult === GAME.RESULT_CHALLENGER_WIN && (
        <p>You win this round!</p>
      )}
      {roundResult === GAME.RESULT_DRAW && <p>Draw!</p>}

      <Button onClick={() => onReadyUp()} disabled={isReady}>
        Next
      </Button>
    </div>
  );
};

ResultScreen.propTypes = {
  round: PropTypes.number,
  roundResult: PropTypes.string,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
  hostMove: PropTypes.string,
  challengerMove: PropTypes.string,
  isHost: PropTypes.bool,
  onReadyUp: PropTypes.func,
  isReady: PropTypes.bool,
};

export default ResultScreen;
