import styled from 'styled-components';
import { color } from '../../themes';

export const FormInput = styled.div`
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
  padding: 0.5rem 1rem;
`;
