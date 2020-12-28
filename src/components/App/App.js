import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Loader from '../Loader';
import ProtectedRoute from '../ProtectedRoute';
import Account from '../../containers/Account';
import Admin from '../../containers/Admin';
import Game from '../../containers/Game';
import Games from '../../containers/Games';
import Landing from '../../containers/Landing';
import NotFound from '../../containers/NotFound';
import PasswordForget from '../../containers/PasswordForget';
import SignIn from '../../containers/SignIn';
import SignUp from '../../containers/SignUp';
import { useAuth } from '../../store/auth';
import { useFirebase } from '../../store/firebase';
import * as ROUTES from '../../constants/routes';
import * as Styles from './styles';

const App = () => {
  const [loading, setLoading] = useState(true);

  const auth = useAuth();
  const authRef = useRef(auth);

  const firebase = useFirebase();
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const listener = firebaseRef.current.auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        authRef.current.setUser(null);
      } else {
        firebaseRef.current
          .user(authUser.uid)
          .get()
          .then((doc) => {
            authRef.current.setUser(doc.data());
          });
      }

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
    <Styles.App>
      <Header auth={auth} />
      <Switch>
        <ProtectedRoute
          condition={auth.user !== null && auth.user.admin}
          redirect={ROUTES.LANDING}
          path={ROUTES.ADMIN}
          component={Admin}
        />
        <ProtectedRoute
          condition={auth.user !== null}
          redirect={ROUTES.SIGN_IN}
          path={ROUTES.ACCOUNT}
          component={Account}
        />
        <ProtectedRoute
          condition={!auth.user !== null}
          redirect={ROUTES.LANDING}
          path={ROUTES.SIGN_UP}
          component={SignUp}
        />
        <ProtectedRoute
          condition={auth.user === null}
          redirect={ROUTES.LANDING}
          path={ROUTES.SIGN_IN}
          component={SignIn}
        />
        <ProtectedRoute
          condition={!auth.user === null}
          redirect={ROUTES.ACCOUNT}
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForget}
        />
        <Route path={ROUTES.GAMES} component={Games} />
        <Route path={ROUTES.GAME} component={Game} />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </Styles.App>
  );
};

export default App;
