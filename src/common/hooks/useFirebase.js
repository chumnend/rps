import { useContext } from 'react';

import { FirebaseContext } from '../../services/firebase';

const useFirebase = () => useContext(FirebaseContext);

export default useFirebase;
