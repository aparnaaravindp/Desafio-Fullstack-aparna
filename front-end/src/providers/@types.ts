export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  token: string;
}

export interface AuthContextValues {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userLogin: (data: ILoginData) => Promise<void>;
  userLogout: () => void;
}
