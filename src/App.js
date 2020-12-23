import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import * as ROUTES from './constants/routes';
import { FirebaseProvider } from './store/firebase';
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
    <FirebaseProvider>
      <Router>
        <Header />
        <hr />
        <Switch>
          <Route path={ROUTES.ADMIN} component={Admin} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.GAME} component={Game} />
          <Route path={ROUTES.GAMES} component={Games} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </FirebaseProvider>
  );
};

export default App;
