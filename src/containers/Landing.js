import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import List from '../components/List';
import ListItem from '../components/ListItem';
import ListTitle from '../components/ListTitle';
import Page from '../components/Page';
import * as ROUTES from '../constants/routes';

const Landing = () => {
  return (
    <Page>
      <Banner />
      <List>
        <ListTitle>How To Play</ListTitle>
        <ListItem>
          1. <Link to={ROUTES.SIGN_UP}>Register</Link> or{' '}
          <Link to={ROUTES.SIGN_IN}>Login</Link>
        </ListItem>
        <ListItem>2. Find a match or host your own</ListItem>
        <ListItem>3. Ready up and wait for your opponent</ListItem>
        <ListItem>4. Face off in an epic duel!</ListItem>
      </List>
    </Page>
  );
};

export default Landing;
