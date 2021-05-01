import styled from 'styled-components';

import { color } from '../../../../../../common/themes';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;
  background: ${color.white};
`;
