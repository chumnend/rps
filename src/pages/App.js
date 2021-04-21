import React from 'react';

import AppPage from '../components/AppPage';
import AppRoutes from '../components/AppRoutes';
import Header from '../components/Header';
import Loader from '../components/Loader';
import useFirebase from '../hooks/useFirebase';

const App = () => {
  const firebase = useFirebase();

  if (firebase.loading) {
    return <Loader />;
  }

  return (
    <AppPage>
      <Header user={firebase.user} />
      <AppRoutes user={firebase.user} />
    </AppPage>
  );
};

export default App;
