import { auth } from '../config';

const logoutUser = async () => {
  await auth.signOut();
};

export default logoutUser;
