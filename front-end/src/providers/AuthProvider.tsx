import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AuthContextValues, AuthProviderProps, ILoginData, IUserLoginResponse } from "./@types";


export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if(!token){
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
    }, [])

   const userLogin = async(data:ILoginData) => {
   
    try {
    setLoading(true);
    const response  = await api.post<IUserLoginResponse>("/login", data)
    const { token } = response.data
    console.log(response.data)

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    localStorage.setItem("@TOKEN", token);

    toast.success("Logged in successfully!", { autoClose: 2000 });

    navigate("dashboard");
    }catch(error){
        console.log(error);
      toast.error("e-mail or password invalid", { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
    }


    const userLogout = () => {
  
      localStorage.removeItem("@TOKEN");
  
      navigate("/");
    };
   
  return (
  <AuthContext.Provider value = {{
    loading,
    setLoading,
    userLogin,
    userLogout
  }}>
    {children}
    </AuthContext.Provider>
    );
};
