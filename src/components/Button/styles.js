import styled from 'styled-components';
import { color } from '../../themes';

export const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;

  ${(props) => {
    if (props.theme === 'primary') {
      return `
        background: ${color.white};
        color: ${color.black};
      
        &:disabled {
          background: ${color.grey};
          color: ${color.white};
          font-weight: 500;
        }
      `;
    } else {
      return `
        background: ${color.lightblue};
        color: ${color.white};
      
        &:disabled {
          background: ${color.grey};
          color: ${color.white};
          font-weight: 500;
        }
      `;
    }
  }}
`;
