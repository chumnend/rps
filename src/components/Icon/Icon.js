import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';

const Icon = (props) => {
  return (
    <Styles.Icon to={props.to}>
      <i className={props.classname} />
      <p>{props.title}</p>
    </Styles.Icon>
  );
};

Icon.propTypes = {
  to: PropTypes.string,
  classname: PropTypes.string,
  title: PropTypes.string,
};

export default Icon;
