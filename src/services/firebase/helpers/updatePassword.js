import { auth } from '../config';

const updatePassword = async (password) => {
  try {
    const user = auth.currentUser;
    await user.updatePassword(password);

    return true;
  } catch (error) {
    return false;
  }
};

export default updatePassword;
