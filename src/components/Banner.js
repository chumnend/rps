import React from 'react';
import styled from 'styled-components';

import rps from '../assets/RPS.png';

// Styles =================================================
export const StyledBanner = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
`;

// Component ==============================================
const Banner = () => {
  return <StyledBanner src={rps} alt="RPS Duels: Ready for a challenge" />;
};

export default Banner;
