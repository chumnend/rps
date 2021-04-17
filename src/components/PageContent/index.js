import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const PageContent = (props) => {
  return <Styles.Div {...props}>{props.children}</Styles.Div>;
};

PageContent.propTypes = {
  children: PropTypes.node,
};

export default PageContent;
