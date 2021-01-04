import styled from 'styled-components';
import { device } from '../../themes';

export const Page = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;

  @media all and (min-width: ${device.md}) {
    width: 80%;
    margin: 0 auto;
  }
`;
