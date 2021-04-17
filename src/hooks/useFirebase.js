import { useContext } from 'react';

import { FirebaseContext } from '../store/firebase';

const useFirebase = () => useContext(FirebaseContext);

export default useFirebase;
