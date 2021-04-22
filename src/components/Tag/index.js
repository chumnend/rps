import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Tag = (props) => {
  return <Styles.Tag>{props.children}</Styles.Tag>;
};

Tag.propTypes = {
  children: PropTypes.node,
};

export default Tag;
