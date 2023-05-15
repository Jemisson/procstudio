import axios from 'axios';
import { parseCookies } from 'nookies';

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function getAPIClient(ctx?: any) {
  const { 'nextauth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: `${BASE_URL}`,
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
