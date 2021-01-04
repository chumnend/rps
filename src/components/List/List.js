import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const List = (props) => {
  return <Styles.List>{props.children}</Styles.List>;
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
