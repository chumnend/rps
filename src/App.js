import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import Account from './containers/Account';
import Admin from './containers/Admin';
import Game from './containers/Game';
import Games from './containers/Games';
import Landing from './containers/Landing';
import NotFound from './containers/NotFound';
import PasswordForget from './containers/PasswordForget';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import { useAuth } from './store/auth';
import { useFirebase } from './store/firebase';
import * as ROUTES from './utils/constants/routes';

const App = () => {
  const [loading, setLoading] = useState(true);

  const auth = useAuth();
  const firebase = useFirebase();

  const authRef = useRef(auth);
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const listener = firebaseRef.current.auth.onAuthStateChanged((user) => {
      user ? authRef.current.setUser(user) : authRef.current.setUser(null);
      setLoading(false);
    });

    return () => {
      listener();
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

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
