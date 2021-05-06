import styled from 'styled-components';

import { color } from '../../../../../../common/themes';

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

export const Button = styled.button`
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  background: ${color.lightblue};
  color: ${color.white};
  border: 1px solid ${color.lightblue};

  &:disabled {
    background: ${color.grey};
    color: ${color.white};
    font-weight: 500;
    border: 1px solid ${color.grey};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
