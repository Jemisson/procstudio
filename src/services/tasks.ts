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

const getAllTasks = async () => {
  try {
    const response = await api.get('/jobs');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (id: string) => {
  try {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createTask, getAllTasks, getTaskById };
