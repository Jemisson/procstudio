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

interface ISignInRequestData {
  email: string;
  password: string;
}

export type { IUser, ISignInData, IAuthContextType, ISignInRequestData };
