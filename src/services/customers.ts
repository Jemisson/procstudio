import { api } from './api';

const createCustomer = async (data: any) => {
  const payload = {
    client: data,
  };

  try {
    const response = await api.post('/profile_customers', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllCustomers = async () => {
  try {
    const response = await api.get('/profile_customers');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createCustomer, getAllCustomers };
