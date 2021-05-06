import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  color: ${color.white};

  @media all and (min-width: ${device.md}) {
    font-size: 3rem;
  }

  @media all and (min-width: ${device.xl}) {
    font-size: 4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;

  @media all and (min-width: ${device.md}) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  padding: 1.5rem 2.5rem;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  display: inline-block;
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
