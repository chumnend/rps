import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '../../../../common/components/IconButton';
import * as ROUTES from '../../../../common/constants/routes';
import AdminNav from './components/AdminNav';
import GuestNav from './components/GuestNav';
import UserNav from './components/UserNav';
import * as Styles from './styles';

const Header = ({ user }) => {
  let navbar = <GuestNav />;
  if (user != null) {
    navbar = user.admin ? <AdminNav /> : <UserNav />;
  }

  return (
    <Styles.Header role="header">
      <Styles.Container>
        <IconButton classname="fas fa-home" title="Home" to={ROUTES.LANDING} />
        {navbar}
      </Styles.Container>
    </Styles.Header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
