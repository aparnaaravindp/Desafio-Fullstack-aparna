import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import inputDataValidCheckMiddleWare from "../middlewares/inputDataValidCheck.middleware";
import { userSchemaRequest } from "../schemas/users.schema";
import { emailExistsCheckMiddleware } from "../middlewares/emailExistsCheck.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  inputDataValidCheckMiddleWare(userSchemaRequest),
  emailExistsCheckMiddleware,
  createUserController
);

export { usersRoutes };
