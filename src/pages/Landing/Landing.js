import React from 'react';

import Banner from './components/Banner';
import HowToPlay from './components/HowToPlay';
import Layout from './components/Layout';

const Landing = () => {
  return (
    <Layout data-testid="landing">
      <Banner />
      <HowToPlay />
    </Layout>
  );
};

export default Landing;
