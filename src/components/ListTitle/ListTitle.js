import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const ListTitle = (props) => {
  return <Styles.ListTitle>{props.children}</Styles.ListTitle>;
};

ListTitle.propTypes = {
  children: PropTypes.node,
};

export default ListTitle;
