import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  color: ${color.white};
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;

  @media all and (min-width: ${device.md}) {
    font-size: 3rem;
  }

  @media all and (min-width: ${device.xl}) {
    font-size: 4rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Li = styled.li`
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
