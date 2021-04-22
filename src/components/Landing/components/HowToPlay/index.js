import { Link } from 'react-router-dom';

import * as ROUTES from '../../../../common/constants/routes';
import * as Styles from './styles';

const HowToPlay = () => {
  return (
    <Styles.Container>
      <Styles.Title>How To Play</Styles.Title>
      <Styles.Ul>
        <Styles.Li>
          1. <Link to={ROUTES.SIGN_UP}>Register</Link> or{' '}
          <Link to={ROUTES.SIGN_IN}>Login</Link>
        </Styles.Li>
        <Styles.Li>2. Find a match or host your own</Styles.Li>
        <Styles.Li>3. Ready up and wait for your opponent</Styles.Li>
        <Styles.Li>4. Face off in an epic duel!</Styles.Li>
      </Styles.Ul>
    </Styles.Container>
  );
};

export default HowToPlay;
