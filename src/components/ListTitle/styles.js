import styled from 'styled-components';
import { device } from '../../themes';

export const ListTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  margin-bottom: 1rem;

  @media all and (min-width: ${device.md}) {
    font-size: 3rem;
  }

  @media all and (min-width: ${device.xl}) {
    font-size: 4rem;
  }
`;
