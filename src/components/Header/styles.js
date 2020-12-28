import styled from 'styled-components';
import { layout } from '../../themes';

export const Header = styled.header`
  width: 100vw;
  height: ${layout.navHeight};
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
