import styled from 'styled-components';
import { device } from '../../themes';

export const Header = styled.header`
  width: 100%;
  height: auto;
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
