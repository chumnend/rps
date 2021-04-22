import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Link = (props) => {
  return <Styles.Link {...props}>{props.children}</Styles.Link>;
};

Link.propTypes = {
  children: PropTypes.node,
};

export default Link;
