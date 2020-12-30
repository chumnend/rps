import styled from 'styled-components';
import { color } from '../../themes';

export const Button = styled.button`
  background: ${color.white};
  color: ${color.black};
  border: 1px solid ${color.black};
  font: inherit;
  line-height: 1;
  border-radius: 5px;
  padding: 0.5em;
  padding: ${(props) => props.size === 'sm' && 0};
  padding: ${(props) => props.size === 'lg' && '1em 2em'};
  cursor: pointer;
  transition: 0.4s;

  &:hover,
  &:focus {
    color: ${color.white};
    border: 1px solid ${color.white};
  }
`;
