import { useState } from 'react';

const useInputState = (initState = null) => {
  const [state, setState] = useState(initState);

  const changeState = (event) => {
    setState(event.target.value);
  };

  return [state, changeState];
};

export default useInputState;
