import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const FormLink = (props) => {
  return <Styles.CustomLink {...props}>{props.children}</Styles.CustomLink>;
};

FormLink.propTypes = {
  children: PropTypes.node,
};

export default FormLink;
