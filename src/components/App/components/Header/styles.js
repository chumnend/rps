import styled from 'styled-components';

import { layout } from '../../../../common/themes';

export const Header = styled.header`
  width: 100%;
  height: ${layout.headerHeight};
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
