import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const Router = (props) => {
  return (
    <Switch>
      <ProtectedRoute
        exact
        path={ROUTES.HOME}
        condition={props.user !== null}
        redirect={ROUTES.LANDING}
        component={Home}
      />
      <ProtectedRoute
        exact
        path={ROUTES.ADMIN}
        condition={props.user !== null && props.user.admin}
        redirect={ROUTES.LANDING}
        component={Admin}
      />
      <ProtectedRoute
        exact
        path={ROUTES.ACCOUNT}
        condition={props.user !== null}
        redirect={ROUTES.SIGN_IN}
        component={Account}
      />
      <ProtectedRoute
        exact
        path={ROUTES.GAMES}
        condition={props.user !== null}
        redirect={ROUTES.SIGN_IN}
        component={Games}
      />
      <ProtectedRoute
        exact
        path={ROUTES.GAME}
        condition={props.user !== null}
        redirect={ROUTES.SIGN_IN}
        component={Game}
      />
      <ProtectedRoute
        exact
        path={ROUTES.LANDING}
        condition={props.user === null}
        redirect={ROUTES.HOME}
        component={Landing}
      />
      <ProtectedRoute
        exact
        path={ROUTES.SIGN_UP}
        condition={props.user === null}
        redirect={ROUTES.LANDING}
        component={SignUp}
      />
      <ProtectedRoute
        exact
        path={ROUTES.SIGN_IN}
        condition={props.user === null}
        redirect={ROUTES.LANDING}
        component={SignIn}
      />
      <ProtectedRoute
        exact
        path={ROUTES.PASSWORD_FORGET}
        condition={props.user === null}
        redirect={ROUTES.ACCOUNT}
        component={PasswordForget}
      />
      <Route exact path={ROUTES.LOGOUT} component={Logout} />
      <Route component={NotFound} />
    </Switch>
  );
};

Router.propTypes = {
  user: PropTypes.object,
};

export default Router;
