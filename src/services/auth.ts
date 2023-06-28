import { api } from './api';
import { ISignInRequestData } from '@/interfaces/IAuth';

const signInRequest = async (data: ISignInRequestData) => {
  const { email, password } = data;

  const auth = {
    email,
    password,
  };

  try {
    const response = await api.post('/login', auth);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { signInRequest };
