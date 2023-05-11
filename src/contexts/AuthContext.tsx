import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

import { recoverUserInformation, signInRequest } from '../services/auth';
import { api } from '../services/api';
import Router from 'next/router';

interface IUser {
  name: string;
  email: string;
}

interface ISignInData {
  email: string;
  password: string;
}

interface IAuthContextType {
  isAuthenticated: boolean;
  user: IUser;
  signIn: (data: ISignInData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response: any) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, password }: ISignInData) {
    try {
      // const { token, user } = await signInRequest({
      //   email,
      //   password,
      // });
      // setCookie(undefined, 'nextauth.token', token, {
      //   maxAge: 60 * 60 * 1,
      //   1 hour duration
      // });
      // api.defaults.headers['Authorization'] = `Bearer ${token}`;
      // setUser(user);
      // Router.push('/clients');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
