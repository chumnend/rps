import PropTypes from 'prop-types';

import * as Styles from './styles';

const WaitScreen = ({ id }) => {
  const copyURL = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    alert('Copied URL'); // TODO: Create alert message after/during RPS-28
  };

  return (
    <Styles.Container>
      <Styles.Heading>Your Game ID is:</Styles.Heading>
      <Styles.GameId onClick={copyURL}>{id}</Styles.GameId>
      <Styles.SmallText>Click to copy URL</Styles.SmallText>
    </Styles.Container>
  );
};

WaitScreen.propTypes = {
  id: PropTypes.string,
};

export default WaitScreen;
