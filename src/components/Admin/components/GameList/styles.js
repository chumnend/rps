import styled from 'styled-components';

import { color, device } from '../../../../common/themes';

export const List = styled.ul`
  width: 90%;
  max-height: 500px;
  overflow: scroll;
  margin: 0 auto;
  padding: 1rem 0;
  list-style: none;
  background: ${color.white};
  color: ${color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ListItem = styled.li`
  width: 90%;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${color.grey};
  border-radius: 3px;

  @media all and (min-width: ${device.md}) {
    width: 80%;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.8rem;

  @media all and (min-width: ${device.md}) {
    padding: 0;
    text-align: left;
  }
`;

export const Button = styled.button`
  background: ${color.lightred};
  color: ${color.white};
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
`;
