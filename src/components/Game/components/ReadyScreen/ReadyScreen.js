import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';
import * as Styles from './styles';

const ReadyScreen = ({ isReady, handleReadyUp }) => {
  return (
    <Styles.Container>
      <Styles.Heading>Waiting for players to be ready...</Styles.Heading>

      <Button onClick={handleReadyUp} disabled={isReady}>
        Ready Up
      </Button>
    </Styles.Container>
  );
};

ReadyScreen.propTypes = {
  isReady: PropTypes.bool,
  handleReadyUp: PropTypes.func,
};

export default ReadyScreen;
