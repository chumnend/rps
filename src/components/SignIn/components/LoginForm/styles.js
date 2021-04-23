import { Link as ReactLink } from 'react-router-dom';
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

export const Link = styled(ReactLink)`
  color: ${color.black};

  &:hover {
    color: ${color.grey};
  }
`;
