import PropTypes from 'prop-types';

import Button from '../../../../common/components/Button';
import * as Styles from './styles';

const MatchFinder = ({ onFind, onHost }) => {
  return (
    <Styles.Container>
      <Styles.Title>Ready for a match?</Styles.Title>
      <Styles.ButtonContainer>
        <Button size="lg" onClick={onFind}>
          Find Games
        </Button>
        <Button size="lg" onClick={onHost}>
          Host Game
        </Button>
      </Styles.ButtonContainer>
    </Styles.Container>
  );
};

MatchFinder.propTypes = {
  onFind: PropTypes.func,
  onHost: PropTypes.func,
};

export default MatchFinder;
