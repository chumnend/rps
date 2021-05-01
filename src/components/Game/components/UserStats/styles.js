import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;
  background: ${color.white};

  @media all and (min-width: ${device.md}) {
    border-radius: 10px;
    padding: 2rem;
  }
`;

export const VersusIcon = styled.span`
  width: 3rem;
  height: 3rem;
  border: 2px solid ${color.lightblue};
  border-radius: 50%;
  color: ${color.lightblue};
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
