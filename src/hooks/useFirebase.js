import React from 'react';

import { FirebaseContext } from '../store/firebase';

const useFirebase = () => React.useContext(FirebaseContext);

export default useFirebase;
