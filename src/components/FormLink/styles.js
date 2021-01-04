import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../themes';

export const CustomLink = styled(Link)`
  color: ${color.black};

  &:hover {
    color: ${color.grey};
  }
`;
