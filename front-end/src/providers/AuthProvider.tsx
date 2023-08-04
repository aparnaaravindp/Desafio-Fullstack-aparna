import { SetStateAction, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import jwt_decode, { JwtPayload } from "jwt-decode";

import {
  AuthContextValues,
  AuthProviderProps,
  IContact,
  IContactData,
  IContactUpdateResponse,
  ILoginData,
  IRegisterData,
  IUser,
  IUserData,
  IUserLoginResponse,
  IUserUpdateResponse,
} from "./@types";

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [contactModal, setContactModal] = useState(false);
  const [contactData, setContactData] = useState<IContact[]>([]);
  const [contactUpdateModal, setContactUpdateModal] = useState(false);
  const [editingStatus, setEditingStatus] = useState(null);
  const [userEditingStatus, setUserEditingStatus] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  const listUsers = async (userId: number) => {
    const response = await api.get<IUser[]>("/users");
    return response.data.find((user) => user.id === userId);
  };

  const userLogin = async (data: ILoginData) => {
    try {
      setLoading(true);
      const response = await api.post<IUserLoginResponse>("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const decoded: JwtPayload = jwt_decode(token);

      localStorage.setItem("@TOKEN", token);
      const userData = await listUsers(parseInt(decoded.sub!));
      setUser(userData as SetStateAction<IUser>);

      toast.success("Logged in successfully!", { autoClose: 2000 });

      navigate("dashboard");
    } catch (error) {
      console.log(error);
      toast.error("e-mail or password invalid", { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data: IRegisterData) => {
    try {
      const response = await api.post<IUser>(`/users`, data);
      setUser(response.data);

      toast.success("Account created successfully!", { autoClose: 2000 });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong", { autoClose: 2000 });
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");

    navigate("/");
  };

  const contactCreate = async (data: IContactData) => {
    try {
      const response = await api.post(`/contacts`, data);

      setContactData(response.data);
      toast.success("Contact created successfully", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
  };

  const contactUpdate = async (data: IContactData, contactId: number) => {
    try {
      const response = await api.patch<IContactUpdateResponse>(
        `/contacts/${contactId}`,
        data
      );
      console.log(response.data);
      toast.success("Contact updated successfully", { autoClose: 2000 });

      const newContactData = contactData.map((contact) => {
        if (contactId === contact.id) {
          return { ...contact, ...data };
        } else {
          return contact;
        }
      });

      setContactData(newContactData);
    } catch (error) {
      console.log(error);
    }
  };

  const contactDelete = async (contactId: number) => {
    try {
      const response = await api.delete(`/contacts/${contactId}`);
      setContactData(response.data);
      toast.success("Contact deleted successfully", { autoClose: 2000 });

      const newContactData = contactData.filter(
        (contact) => contact.id !== contactId
      );
      setContactData(newContactData);
    } catch (error) {
      console.log(error);
    }
  };

  const userUpdate = async (data: IUserData, userId: number) => {
    try {
      const response = await api.patch<IUserUpdateResponse>(
        `/users/${userId}`,
        data
      );

      toast.success("User updated successfully", { autoClose: 2000 });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userDelete = async (userId: number) => {
    try {
      await api.delete(`/users/${userId}`);

      toast.success("User deleted successfully", { autoClose: 2000 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        userRegister,
        userLogin,
        userLogout,
        user,
        contactModal,
        setContactModal,
        contactCreate,
        contactUpdateModal,
        setContactUpdateModal,
        editingStatus,
        setEditingStatus,
        contactUpdate,
        contactDelete,
        userEditingStatus,
        setUserEditingStatus,
        userUpdate,
        userDelete,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
