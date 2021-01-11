import styled from 'styled-components';
import { device } from '../../themes';

export const GamesList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media all and (min-width: ${device.sm}) {
    padding: 0 2rem;
  }

  @media all and (min-width: ${device.md}) {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (min-width: ${device.lg}) {
    padding: 0;
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (min-width: ${device.xl}) {
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
  }
`;
