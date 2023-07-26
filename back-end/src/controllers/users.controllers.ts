import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import createUsersServices from "../services/users/createUsers.services";

const createUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userData: TUserRequest = req.body;
    const newUser = await createUsersServices(userData);
    return res.status(201).json(newUser);
  };

  export {createUserController}
  