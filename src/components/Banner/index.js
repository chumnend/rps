import React from 'react';

import rps from '../../assets/RPS.png';
import * as Styles from './styles';

const Banner = () => {
  return <Styles.Image src={rps} alt="RPS Duels: Ready for a challenge" />;
};

export default Banner;
