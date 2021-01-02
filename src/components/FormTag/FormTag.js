import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const FormTag = (props) => {
  return <Styles.FormTag>{props.children}</Styles.FormTag>;
};

FormTag.propTypes = {
  children: PropTypes.node,
};

export default FormTag;
