import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
