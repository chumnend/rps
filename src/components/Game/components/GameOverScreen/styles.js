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

export const Result = styled.h3`
  font-size: 1.5rem;
  padding: 1rem 0;

  @media all and (min-width: ${device.md}) {
    font-size: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media all and (min-width: ${device.md}) {
    flex-direction: row;
  }
`;
