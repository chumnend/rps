import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Layout = ({ children }) => {
  return <Styles.Main>{children}</Styles.Main>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
