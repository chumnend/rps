import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Account from '../../pages/Account';
import Admin from '../../pages/Admin';
import Game from '../../pages/Game';
import Games from '../../pages/Games';
import Home from '../../pages/Home';
import Landing from '../../pages/Landing';
import Logout from '../../pages/Logout';
import NotFound from '../../pages/NotFound';
import PasswordForget from '../../pages/PasswordForget';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = (props) => {
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

AppRoutes.propTypes = {
  user: PropTypes.object,
};

export default AppRoutes;
