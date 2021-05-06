import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Toast from '../Toast';

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [id, setID] = useState(1);
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    console.log('adding message...');

    // create new message
    const newMessage = {
      id,
      message,
    };

    // update id
    setID(() => id + 1);

    // add to message list
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
  };

  const deleteMessage = (id) => {
    console.log('deleting message...');

    const updatedMessages = messages.filter((m) => m.id !== id);
    setMessages(updatedMessages);
  };

  const toasts = messages.map((m) => (
    <Toast key={m.id} deleteToast={() => deleteMessage(m.id)} />
  ));

  const toastValues = {
    messages,
    addMessage,
  };

  return (
    <ToastContext.Provider value={toastValues}>
      {toasts}
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node,
};

export default ToastProvider;
