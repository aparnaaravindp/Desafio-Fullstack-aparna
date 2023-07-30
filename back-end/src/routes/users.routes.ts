import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import inputDataValidCheckMiddleWare from "../middlewares/inputDataValidCheck.middleware";
import {
  userSchemaRequest,
  userUpdateSchemaRequest,
} from "../schemas/users.schema";
import { emailExistsCheckMiddleware } from "../middlewares/emailExistsCheck.middleware";
import { tokenValidCheckMiddleware } from "../middlewares/tokenValidCheck.middleware";
import { userIdExistsCheckMiddleware } from "../middlewares/userIdExistsCheck.middleware";


const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  inputDataValidCheckMiddleWare(userSchemaRequest),
  emailExistsCheckMiddleware,
  createUserController
);

usersRoutes.get("", tokenValidCheckMiddleware, listUsersController);

usersRoutes.patch(
  "/:id",
  tokenValidCheckMiddleware,
  userIdExistsCheckMiddleware,
  inputDataValidCheckMiddleWare(userUpdateSchemaRequest),
  updateUserController
);

usersRoutes.delete(
  "/:id",
  tokenValidCheckMiddleware,
  userIdExistsCheckMiddleware,
  deleteUserController
);

export { usersRoutes };
