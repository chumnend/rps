import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Layout = ({ children }) => {
  return <Styles.Layout>{children}</Styles.Layout>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
