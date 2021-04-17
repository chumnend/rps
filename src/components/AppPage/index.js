import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const AppPage = ({ children }) => {
  return <Styles.Main>{children}</Styles.Main>;
};

AppPage.propTypes = {
  children: PropTypes.node,
};

export default AppPage;
