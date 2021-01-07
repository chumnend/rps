import React from 'react';
import { useHistory } from 'react-router-dom';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Page from '../../components/Page';
import List from '../../components/List';
import ListTitle from '../../components/ListTitle';
import ListItem from '../../components/ListItem';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  const history = useHistory();

  const gotoRegister = () => {
    history.push(ROUTES.SIGN_UP);
  };

  const gotoLogin = () => {
    history.push(ROUTES.SIGN_IN);
  };

  return (
    <Page>
      <Banner />
      <List>
        <ListTitle>How To Play</ListTitle>
        <ListItem>
          1.{' '}
          <Button size="sm" onClick={gotoRegister}>
            Register
          </Button>{' '}
          or{' '}
          <Button size="sm" onClick={gotoLogin}>
            Login
          </Button>
        </ListItem>
        <ListItem>2. Find a match or host your own</ListItem>
        <ListItem>3. Ready up and wait for your opponent</ListItem>
        <ListItem>4. Face off in an epic duel!</ListItem>
      </List>
    </Page>
  );
};

export default Landing;
