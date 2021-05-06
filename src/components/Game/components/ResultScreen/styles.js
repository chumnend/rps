import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: ${device.md}) {
    padding: 2rem 0;
  }
`;

export const MoveContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 1rem auto;

  @media all and (min-width: ${device.md}) {
    width: 60%;
  }
`;

export const MoveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoveIcon = styled.i`
  background: ${color.white};
  padding: 2rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  color: ${color.black};
  font-size: 2rem;
`;

export const MoveText = styled.span`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Result = styled.h3`
  font-size: 1.5rem;
  padding: 1rem 0;

  @media all and (min-width: ${device.md}) {
    font-size: 2rem;
  }
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
  padding: 1rem 2rem;
  font-size: 1rem;
  background: ${color.white};
  color: ${color.black};
  border: 1px solid ${color.white};

  &:disabled {
    background: ${color.grey};
    color: ${color.white};
    font-weight: 500;
    border: 1px solid ${color.grey};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
