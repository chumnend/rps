import { auth } from '../config';

const resetPassword = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);

    return true;
  } catch (error) {
    return false;
  }
};

export default resetPassword;
