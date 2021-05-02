import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';
import * as GAME from '../../../../common/constants/game';
import Scoreboard from '../Scoreboard';
import * as Styles from './styles';

const GameOverScreen = ({
  round,
  roundResult,
  hostScore,
  challengerScore,
  isHost,
  isReady,
  handleReadyUp,
  handleLeave,
}) => {
  let resultText;
  if (roundResult === GAME.RESULT_HOST_WIN) {
    resultText = isHost ? 'Game Over, You win!' : 'Game Over, You lose!';
  } else if (roundResult === GAME.RESULT_CHALLENGER_WIN) {
    resultText = isHost ? 'Game Over, You lose!' : 'Game Over, You win!';
  } else {
    // draw
    resultText = 'Draw!';
  }

  return (
    <Styles.Container>
      <Scoreboard
        round={round}
        hostScore={hostScore}
        challengerScore={challengerScore}
      />

      <Styles.Result>{resultText}</Styles.Result>

      <Styles.ButtonContainer>
        <Button onClick={handleReadyUp} disabled={isReady}>
          Rematch?
        </Button>
        <Button onClick={handleLeave}>Leave</Button>
      </Styles.ButtonContainer>
    </Styles.Container>
  );
};

GameOverScreen.propTypes = {
  round: PropTypes.number,
  roundResult: PropTypes.string,
  hostScore: PropTypes.number,
  challengerScore: PropTypes.number,
  isHost: PropTypes.bool,
  isReady: PropTypes.bool,
  handleReadyUp: PropTypes.func,
  handleLeave: PropTypes.func,
};

export default GameOverScreen;
