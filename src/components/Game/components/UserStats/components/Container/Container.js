import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Container = ({ children }) => {
  return <Styles.Container>{children}</Styles.Container>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
