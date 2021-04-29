import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';

const ReadyScreen = ({ isReady, handleReadyUp }) => {
  return (
    <div>
      <p>Waiting for players to be ready...</p>

      <Button onClick={handleReadyUp} disabled={isReady}>
        Ready Up
      </Button>
    </div>
  );
};

ReadyScreen.propTypes = {
  isReady: PropTypes.bool,
  handleReadyUp: PropTypes.func,
};

export default ReadyScreen;
