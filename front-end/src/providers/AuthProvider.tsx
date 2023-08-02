import { SetStateAction, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import jwt_decode, { JwtPayload } from "jwt-decode";

import {
  AuthContextValues,
  AuthProviderProps,
  IContactData,
  ILoginData,
  IRegisterData,
  IUser,
  IUserLoginResponse,
} from "./@types";

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [contactModal, setContactModal] = useState(false);
  const [contactData, setContactData] = useState([]);

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
      console.log(contactData);
      setContactData(response.data);
      toast.success("Contact created successfully", { autoClose: 2000 });
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
