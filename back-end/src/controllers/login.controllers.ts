import { Request, Response } from "express";
import { TLoginRequest } from "../interfaces/login.interfaces";
import loginSessionServices from "../services/login/loginSession.services";


const loginController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const loginData: TLoginRequest = req.body;
    const token = await loginSessionServices(loginData);
    return res.status(200).json({ token });
  };
  
  export { loginController };
  