import { api } from './api';

const signInRequest = async (data: ISignInRequestData) => {
  const { email, password } = data;

  try {
    const response = await api.post(
      `/login?email=${email}&password=${password}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { signInRequest };
