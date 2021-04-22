import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Layout = (props) => {
  return <Styles.Div {...props}>{props.children}</Styles.Div>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
