import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Loader from './components/Loader';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './containers/Account';
import Admin from './containers/Admin';
import Game from './containers/Game';
import Games from './containers/Games';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Logout from './containers/Logout';
import NotFound from './containers/NotFound';
import PasswordForget from './containers/PasswordForget';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import * as ROUTES from './constants/routes';
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
      <Switch>
        <ProtectedRoute
          exact
          path={ROUTES.HOME}
          condition={auth.user !== null}
          redirect={ROUTES.LANDING}
          component={Home}
        />
        <ProtectedRoute
          exact
          path={ROUTES.ADMIN}
          condition={auth.user !== null && auth.user.admin}
          redirect={ROUTES.LANDING}
          component={Admin}
        />
        <ProtectedRoute
          exact
          path={ROUTES.ACCOUNT}
          condition={auth.user !== null}
          redirect={ROUTES.SIGN_IN}
          component={Account}
        />
        <ProtectedRoute
          exact
          path={ROUTES.GAMES}
          condition={auth.user !== null}
          redirect={ROUTES.SIGN_IN}
          component={Games}
        />
        <ProtectedRoute
          exact
          path={ROUTES.GAME}
          condition={auth.user !== null}
          redirect={ROUTES.SIGN_IN}
          component={Game}
        />
        <ProtectedRoute
          exact
          path={ROUTES.LANDING}
          condition={auth.user === null}
          redirect={ROUTES.HOME}
          component={Landing}
        />
        <ProtectedRoute
          exact
          path={ROUTES.SIGN_UP}
          condition={auth.user === null}
          redirect={ROUTES.LANDING}
          component={SignUp}
        />
        <ProtectedRoute
          exact
          path={ROUTES.SIGN_IN}
          condition={auth.user === null}
          redirect={ROUTES.LANDING}
          component={SignIn}
        />
        <ProtectedRoute
          exact
          path={ROUTES.PASSWORD_FORGET}
          condition={auth.user === null}
          redirect={ROUTES.ACCOUNT}
          component={PasswordForget}
        />
        <Route exact path={ROUTES.LOGOUT} component={Logout} />
        <Route component={NotFound} />
      </Switch>
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
