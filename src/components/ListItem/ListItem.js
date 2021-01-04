import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const ListItem = (props) => {
  return <Styles.ListItem>{props.children}</Styles.ListItem>;
};

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
