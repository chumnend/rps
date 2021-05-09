import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const List = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
  color: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;

  @media all and (min-width: ${device.md}) {
    font-size: 1.5rem;
  }

  @media all and (min-width: ${device.xl}) {
    font-size: 2rem;
  }
`;
