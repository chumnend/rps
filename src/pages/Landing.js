import React from 'react';

import Banner from '../components/Banner';
import HowToPlay from '../components/HowToPlay';
import PageContent from '../components/PageContent';

const Landing = () => {
  return (
    <PageContent data-testid="landing">
      <Banner />
      <HowToPlay />
    </PageContent>
  );
};

export default Landing;
