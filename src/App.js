import React from 'react';
import styled from 'styled-components';
import Router from './Router';
import Header from './components/Header';
import Loader from './components/Loader';
import { useAuth } from './store/auth';
import { color } from './themes';

const App = () => {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <StyledApp>
      <Header auth={auth} />
      <Router auth={auth} />
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
