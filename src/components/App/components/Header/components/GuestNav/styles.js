import styled from 'styled-components';

import { device } from '../../../../../../common/themes';

export const Nav = styled.nav`
  height: 100%;
`;

export const Ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;

  @media all and (min-width: ${device.lg}) {
    gap: 1rem;
  }
`;

export const Li = styled.li`
  height: 100%;
`;
