import PropTypes from 'prop-types';

import { useToast } from '../../../../services/toast';
import * as Styles from './styles';

const WaitScreen = ({ id }) => {
  const { addMessage } = useToast();

  const copyURL = async (e) => {
    e.preventDefault();

    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    addMessage('Copied URL');
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
