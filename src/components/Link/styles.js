import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

import { color } from '../../themes';

export const Link = styled(ReactLink)`
  color: ${color.black};

  &:hover {
    color: ${color.grey};
  }
`;
