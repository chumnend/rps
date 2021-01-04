import React from 'react';
import Page from '../../components/Page';
import logo from '../../assets/logo-320x300.png';

const Landing = () => {
  return (
    <Page>
      <img src={logo} alt="RPS Duels: Ready for a challenge" />
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
