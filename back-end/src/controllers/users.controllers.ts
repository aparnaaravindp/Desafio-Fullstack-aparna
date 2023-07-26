import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import createUsersServices from "../services/users/createUsers.services";
import listUsersServices from "../services/users/listUsers.services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;
  const newUser = await createUsersServices(userData);
  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUsersServices();
  return res.status(200).json(users);
};

export { createUserController, listUsersController };
