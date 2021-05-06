import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { TOAST_TIMEOUT } from '../../constants';
import * as Styles from './styles';

const Toast = ({ id, message, deleteToast }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      deleteToast();
    }, TOAST_TIMEOUT);

    return () => {
      clearInterval(interval);
    };
  }, [deleteToast]);

  return (
    <Styles.Toast>
      <button>X</button>
      <div>{message}</div>
    </Styles.Toast>
  );
};

Toast.propTypes = {
  id: PropTypes.number,
  message: PropTypes.string,
  deleteToast: PropTypes.func,
};

export default Toast;
