import React from 'react';

import { useFirebase } from '../../services/firebase';
import Header from './components/Header';
import Layout from './components/Layout';
import Loader from './components/Loader';
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
