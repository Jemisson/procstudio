import axios from 'axios';
import { parseCookies } from 'nookies';

const BASE_URL = process.env.REACT_APP_PUBLIC_SERVER_URL;

export function getAPIClient(ctx?: any) {
  const { 'nextauth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: BASE_URL,
  });

  api.interceptors.request.use(config => {
    console.log(config);
    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
