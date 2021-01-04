import React from 'react';
import Banner from '../../components/Banner';
import Page from '../../components/Page';

const Landing = () => {
  return (
    <Page>
      <Banner />
      <h3>How to play</h3>
      <ol>
        <li>Create an account or log into your account</li>
        <li>Find a match or host your own</li>
        <li>Ready up and wait for your opponent to do the same</li>
        <li>Face off in an epic duel!</li>
      </ol>
    </Page>
  );
};

export default Landing;
