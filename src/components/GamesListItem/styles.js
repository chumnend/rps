import styled from 'styled-components';
import { color } from '../../themes';

export const GamesListItem = styled.div`
  width: 100%;
  background: ${color.white};
  padding: 0.5rem 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const ButtonRightAlign = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
