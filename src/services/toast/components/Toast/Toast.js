import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Toast = ({ deleteToast }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      deleteToast();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [deleteToast]);

  return <div>TEST</div>;
};

Toast.propTypes = {
  deleteToast: PropTypes.func,
};

export default Toast;
