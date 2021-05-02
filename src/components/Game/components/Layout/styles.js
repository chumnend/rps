import styled from 'styled-components';

import { device, layout } from '../../../../common/themes';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${layout.headerHeight});

  @media all and (min-width: ${device.md}) {
    width: 80%;
    margin: 0 auto;
    padding: 1rem 0;
  }
`;
