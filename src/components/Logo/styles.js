import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../themes';

export const Icon = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  text-decoration: none;
  padding: 0.5rem;

  i {
    font-size: 1.5rem;
    padding: 0.3rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
