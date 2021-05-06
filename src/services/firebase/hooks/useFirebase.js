import { useContext } from 'react';

import { FirebaseContext } from '../context/FirebaseProvider';

const useFirebase = () => useContext(FirebaseContext);

export default useFirebase;
