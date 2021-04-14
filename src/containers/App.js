import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Loader from '../components/Loader';
import Router from '../components/Router';
import useFirebase from '../hooks/useFirebase';
import { color } from '../themes';

const App = () => {
  const firebase = useFirebase();

  if (firebase.loading) {
    return <Loader />;
  }

  return (
    <StyledApp>
      <Header user={firebase.user} />
      <Router user={firebase.user} />
    </StyledApp>
  );
};

const StyledApp = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${color.lightblue};
`;

export default App;
