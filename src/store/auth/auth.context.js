import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

const useAuth = () => React.useContext(AuthContext);

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const authValues = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider, useAuth };
