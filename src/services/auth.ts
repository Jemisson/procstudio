import { api } from './api';

interface ISignInRequestData {
  email: string;
  password: string;
}

const signInRequest = async (data: ISignInRequestData) => {
  try {
    const response = await api.post('/login', data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const recoverUserInformation = async () => {
  try {
    const response = await api.get('/user');
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { signInRequest, recoverUserInformation };
