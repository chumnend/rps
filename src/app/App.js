import React from 'react';

import useFirebase from '../common/hooks/useFirebase';
import Loader from '../components/Loader';
import Header from './components/Header';
import Layout from './components/Layout';
import Routes from './components/Routes';

const App = () => {
  const firebase = useFirebase();

  if (firebase.loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <Header user={firebase.user} />
      <Routes user={firebase.user} />
    </Layout>
  );
};

export default App;
