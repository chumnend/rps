import PropTypes from 'prop-types';

import * as Styles from './styles';

const MatchFinder = ({ onFind, onHost }) => {
  return (
    <Styles.Container>
      <Styles.Title>Ready for a match?</Styles.Title>
      <Styles.ButtonContainer>
        <Styles.Button onClick={onFind}>Find Games</Styles.Button>
        <Styles.Button onClick={onHost}>Host Game</Styles.Button>
      </Styles.ButtonContainer>
    </Styles.Container>
  );
};

MatchFinder.propTypes = {
  onFind: PropTypes.func,
  onHost: PropTypes.func,
};

export default MatchFinder;
