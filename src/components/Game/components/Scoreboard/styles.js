import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const Container = styled.div`
  width: 100%;
  border: 2px solid ${color.black};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  border-radius: 10px;

  @media all and (min-width: ${device.md}) {
    width: 60%;
  }
`;

export const Score = styled.div`
  background: ${color.white};
  font-size: 1.5rem;
  font-weight: 700;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media all and (min-width: ${device.md}) {
    font-size: 2rem;
  }
`;

export const Round = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;

  @media all and (min-width: ${device.md}) {
    font-size: 2rem;
  }
`;
