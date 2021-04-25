import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as ROUTES from '../../../../common/constants/routes';
import Account from '../../../Account';
import Admin from '../../../Admin';
import Game from '../../../Game';
import Games from '../../../Games';
import Home from '../../../Home';
import Landing from '../../../Landing';
import Logout from '../../../Logout';
import NotFound from '../../../NotFound';
import PasswordForget from '../../../PasswordForget';
import SignIn from '../../../SignIn';
import SignUp from '../../../SignUp';
import ProtectedRoute from './components/ProtectedRoute';

const Routes = (props) => {
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
        condition={props.user !== null && props.user?.admin}
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

Routes.propTypes = {
  user: PropTypes.object,
};

export default Routes;
