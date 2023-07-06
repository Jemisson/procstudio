import { api } from './api';

const createWork = async (data: any) => {
  const payload = {
    work: data,
  };

  try {
    const response = await api.post('/works', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const getAllWorks = async () => {
  try {
    const response = await api.get('/works');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { createWork, getAllWorks };
