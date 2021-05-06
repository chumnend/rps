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

export const Heading = styled.h3`
  margin: 1.5rem 0;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media all and (min-width: ${device.md}) {
    flex-direction: row;
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
