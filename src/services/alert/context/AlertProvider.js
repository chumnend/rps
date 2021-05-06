import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AlertContext = React.createContext();

const AlertProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
  };

  const alertValues = {
    messages,

    addMessage,
  };

  return (
    <AlertContext.Provider value={alertValues}>
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node,
};

export default AlertProvider;
