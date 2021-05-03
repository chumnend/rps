import { db } from '../config';
import { USERS_ID } from '../constants/collection';

const getUser = (id) => {
  const userRef = db.collection(USERS_ID).doc(id);
  return userRef;
};

export default getUser;
