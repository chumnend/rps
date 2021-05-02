import styled from 'styled-components';

import { device } from '../../../../common/themes';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: ${device.md}) {
    padding: 2rem 0;
  }
`;

export const Heading = styled.h3`
  margin: 1.5rem 0;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media all and (min-width: ${device.md}) {
    flex-direction: row;
  }
`;
