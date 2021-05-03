import { useContext } from 'react';

import { FirebaseContext } from '../firebase';

const useFirebase = () => useContext(FirebaseContext);

export default useFirebase;
