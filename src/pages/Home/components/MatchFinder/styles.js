import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  color: ${color.white};

  @media all and (min-width: ${device.md}) {
    font-size: 3rem;
  }

  @media all and (min-width: ${device.xl}) {
    font-size: 4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;

  @media all and (min-width: ${device.md}) {
    flex-direction: row;
  }
`;
