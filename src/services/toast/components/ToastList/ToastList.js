import PropTypes from 'prop-types';

import Toast from '../Toast';
import * as Styles from './styles';

const ToastList = ({ messages, deleteMessage }) => {
  return (
    <Styles.ToastList>
      {messages.map((m) => (
        <Toast
          key={m.id}
          message={m.message}
          deleteToast={() => deleteMessage(m.id)}
        />
      ))}
    </Styles.ToastList>
  );
};

ToastList.propTypes = {
  messages: PropTypes.array,
  deleteMessage: PropTypes.func,
};

export default ToastList;
