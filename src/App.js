import React, { useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import * as ROUTES from './constants/routes';
import { useAuth } from './store/auth';
import { useFirebase } from './store/firebase';
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
  const auth = useAuth();
  const firebase = useFirebase();

  const authRef = useRef(auth);
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const listener = firebaseRef.current.auth.onAuthStateChanged((user) => {
      user ? authRef.current.setUser({ user }) : authRef.current.setUser(null);
    });

    return () => {
      listener();
    };
  }, []);

  return (
    <>
      <Header auth={auth} />
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
    </>
  );
};

export default App;
