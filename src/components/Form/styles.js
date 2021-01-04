import styled from 'styled-components';
import { color, device } from '../../themes';

export const Form = styled.form`
  width: 100%;
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
