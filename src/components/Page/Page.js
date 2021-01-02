import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Page = (props) => {
  return <Styles.Page>{props.children}</Styles.Page>;
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
