import { SetStateAction } from "react";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
  telephone: number;
  createdAt: string;
}

export interface IRegisterData {
  fullname: string;
  email: string;
  telephone: number;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  token: string;
}

export interface IContact {
  id: number;
  fullname: string;
  email: string;
  telephone: number;
  createdAt: string;
}

export interface IContactData {
  fullname: string;
  email: string;
  telephone: number;
}


export interface IUserData {
  fullname: string;
  email: string;
  telephone: number;
}

export interface IContactUpdateResponse {
  id: number;
  fullname: string;
  email: string;
  telephone: number;
  createdAt: string;
}


export interface IUserUpdateResponse {
  id: number;
  fullname: string;
  email: string;
  telephone: number;
  createdAt: string;
}

export interface AuthContextValues {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userRegister: (data: IRegisterData) => Promise<void>;
  userLogin: (data: ILoginData) => Promise<void>;
  userLogout: () => void;
  user: IUser;
  contactModal: boolean;
  setContactModal: React.Dispatch<SetStateAction<boolean>>;
  contactCreate: (data: IContactData) => Promise<void>;
  editingStatus: null;
  setEditingStatus: React.Dispatch<SetStateAction<null>>;
  contactUpdateModal: boolean;
  setContactUpdateModal: React.Dispatch<SetStateAction<boolean>>;
  contactUpdate: (data: IContactData, contactId: number) => Promise<void>;
  contactDelete: (contactId: number) => Promise<void>;
  userEditingStatus:null;
  setUserEditingStatus:React.Dispatch<SetStateAction<null>>
  userUpdate:(data: IUserData, userId: number) => Promise<void>;
  userDelete:(userId: number) => Promise<void>;

}
