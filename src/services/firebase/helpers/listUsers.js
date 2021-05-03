import { db } from '../config';
import { USERS_ID } from '../constants/collection';

const listUsers = async () => {
  const users = [];

  const usersRef = db.collection(USERS_ID);
  const snapshot = await usersRef.get();
  if (snapshot.empty) {
    return [];
  }

  snapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users;
};

export default listUsers;
