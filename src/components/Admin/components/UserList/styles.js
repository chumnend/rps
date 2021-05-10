import styled from 'styled-components';

import { color } from '../../../../common/themes';

export const List = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  list-style: none;
  background: ${color.white};
  color: ${color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;
