import { createContext, useState } from 'react';
import { setCookie } from 'nookies';

import { signInRequest } from '../services/auth';
import { api } from '../services/api';
import Router from 'next/router';

import { IAuthContextType, IUser, ISignInData } from '@/interfaces/IAuth';

export const AuthContext = createContext({} as IAuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser>({} as IUser);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: ISignInData) {
    try {
      const { token } = await signInRequest({
        email,
        password,
      });

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 1,
        // 1 hour duration
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      setUser(user);
      Router.push('/customers');
    } catch (error: any) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
