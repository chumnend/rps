import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const Form = styled.form`
  width: 100%;
  height: 100%;
  background: ${color.white};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: ${device.md}) {
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
  }

  @media all and (min-width: ${device.lg}) {
    width: 60%;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto 12px;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border-color: ${color.grey};
  background: ${color.white};
  padding: 1rem 1.5rem;
  font-family: inherit;
  font-size: 1rem;
`;

export const Text = styled.p`
  margin: 0.8rem 0;
  text-align: center;
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
