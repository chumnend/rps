import React from 'react';
import Banner from '../../components/Banner';
import Page from '../../components/Page';
import Link from '../../components/Link';
import List from '../../components/List';
import ListTitle from '../../components/ListTitle';
import ListItem from '../../components/ListItem';
import * as ROUTES from '../../constants/routes';

const Landing = () => {
  return (
    <Page>
      <Banner />
      <List>
        <ListTitle>How To Play</ListTitle>
        <ListItem>
          1) <Link to={ROUTES.SIGN_UP}>Create an account</Link> or{' '}
          <Link to={ROUTES.SIGN_IN}>Log in</Link>
        </ListItem>
        <ListItem>2) Find a match or host your own</ListItem>
        <ListItem>3) Ready up and wait for your opponent</ListItem>
        <ListItem>4) Face off in an epic duel!</ListItem>
      </List>
    </Page>
  );
};

export default Landing;
