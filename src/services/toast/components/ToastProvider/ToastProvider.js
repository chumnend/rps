import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ToastList from '../ToastList';

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [id, setID] = useState(1);
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
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
    const updatedMessages = messages.filter((m) => m.id !== id);
    setMessages(updatedMessages);
  };

  const toastValues = {
    addMessage,
  };

  return (
    <ToastContext.Provider value={toastValues}>
      <ToastList messages={messages} deleteMessage={deleteMessage} />
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node,
};

export default ToastProvider;
