import styled from 'styled-components';
import { color } from '../../themes';

export const Button = styled.button`
  background: ${color.blue};
  color: ${color.black};
  border: 1px solid ${color.blue};
  font: inherit;
  line-height: 1;
  border-radius: 5px;

  margin: 0.5em;
  margin: ${(props) => props.size === 'sm' && 0};
  padding: 1em 2em;
  padding: ${(props) => props.size === 'sm' && 0};

  cursor: pointer;
  transition: 0.4s;

  &:hover,
  &:focus {
    color: ${color.white};
    border: 1px solid ${color.white};
  }
`;
