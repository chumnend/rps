import styled from 'styled-components';

import { color } from '../../../../common/themes';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h3`
  text-transform: uppercase;
`;

export const GameId = styled.div`
  background: ${color.white};
  border-radius: 10px;
  margin: 0.8rem;
  padding: 1.5rem;
  cursor: pointer;
`;

export const SmallText = styled.small``;
