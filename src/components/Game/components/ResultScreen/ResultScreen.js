import PropTypes from 'prop-types';

import * as GAME from '../../../../common/constants/game';
import Scoreboard from '../Scoreboard';
import * as Styles from './styles';

const ResultScreen = ({
  round,
  roundResult,
  hostScore,
  challengerScore,
  hostMove,
  challengerMove,
  isHost,
  isReady,
  handleReadyUp,
}) => {
  let resultText;
  if (roundResult === GAME.RESULT_HOST_WIN) {
    resultText = isHost ? 'You win this round!' : 'You lost this round!';
  } else if (roundResult === GAME.RESULT_CHALLENGER_WIN) {
    resultText = isHost ? 'You lost this round!' : 'You win this round!';
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

      <Styles.MoveContainer>
        <Styles.MoveCard>
          <Styles.MoveIcon className={`fas fa-hand-${hostMove}`} />
          <Styles.MoveText>{hostMove}</Styles.MoveText>
        </Styles.MoveCard>
        <Styles.MoveCard>
          <Styles.MoveIcon className={`fas fa-hand-${challengerMove}`} />
          <Styles.MoveText>{challengerMove}</Styles.MoveText>
        </Styles.MoveCard>
      </Styles.MoveContainer>

      <Styles.Result>{resultText}</Styles.Result>

      <Styles.Button onClick={handleReadyUp} disabled={isReady}>
        Next
      </Styles.Button>
    </Styles.Container>
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
  isReady: PropTypes.bool,
  handleReadyUp: PropTypes.func,
};

export default ResultScreen;
