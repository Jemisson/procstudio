import { api } from './api';

const createTask = async (data: any) => {
  const payload = {
    job: data,
  };

  try {
    const response = await api.post('/jobs', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createTask };
