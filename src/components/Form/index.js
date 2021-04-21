import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './styles';

const Form = (props) => {
  return <Styles.Form onSubmit={props.onSubmit}>{props.children}</Styles.Form>;
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
