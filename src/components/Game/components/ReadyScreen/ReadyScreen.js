import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';

const ReadyScreen = ({ onReadyUp, isReady }) => {
  return (
    <div>
      <p>Waiting for players to be ready...</p>

      <Button onClick={() => onReadyUp()} disabled={isReady}>
        Ready Up
      </Button>
    </div>
  );
};

ReadyScreen.propTypes = {
  onReadyUp: PropTypes.func,
  isReady: PropTypes.bool,
};

export default ReadyScreen;
