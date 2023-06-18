import { api } from './api';
import { ISignInRequestData } from '@/interfaces/IAuth';

const signInRequest = async (data: ISignInRequestData) => {
  const { email, password } = data;

  try {
    const response = await api.post(
      `/login?email=${email}&password=${password}`,
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { signInRequest };
