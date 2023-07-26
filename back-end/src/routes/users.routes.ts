import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/users.controllers";
import inputDataValidCheckMiddleWare from "../middlewares/inputDataValidCheck.middleware";
import { userSchemaRequest } from "../schemas/users.schema";
import { emailExistsCheckMiddleware } from "../middlewares/emailExistsCheck.middleware";
import { tokenValidCheckMiddleware } from "../middlewares/tokenValidCheck.middleware";
import { adminVerifyMiddleware } from "../middlewares/adminVerify.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  inputDataValidCheckMiddleWare(userSchemaRequest),
  emailExistsCheckMiddleware,
  createUserController
);

usersRoutes.get(
    "",
    tokenValidCheckMiddleware,
     adminVerifyMiddleware,
    listUsersController 
  );

export { usersRoutes };
