import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import * as ROUTES from './constants/routes';
import Account from './pages/Account';
import Admin from './pages/Admin';
import Game from './pages/Game';
import Games from './pages/Games';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import PasswordForget from './pages/PasswordForget';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Header />
      <hr />

      <Switch>
        <Route exact path={ROUTES.ADMIN} component={Admin} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.GAME} component={Game} />
        <Route exact path={ROUTES.GAMES} component={Games} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
