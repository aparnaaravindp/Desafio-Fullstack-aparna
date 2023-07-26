import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import inputDataValidCheckMiddleWare from "../middlewares/inputDataValidCheck.middleware";
import { userSchemaRequest, userUpdateSchemaRequest } from "../schemas/users.schema";
import { emailExistsCheckMiddleware } from "../middlewares/emailExistsCheck.middleware";
import { tokenValidCheckMiddleware } from "../middlewares/tokenValidCheck.middleware";
import { adminVerifyMiddleware } from "../middlewares/adminVerify.middleware";
import { userIdExistsCheckMiddleware } from "../middlewares/userIdExistsCheck.middleware";
import { notAdminVerifyMiddleware } from "../middlewares/notAdminVerify.middleware";

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

  usersRoutes.patch(
    "/:id",
    tokenValidCheckMiddleware,
    userIdExistsCheckMiddleware,
    notAdminVerifyMiddleware,
    inputDataValidCheckMiddleWare(userUpdateSchemaRequest),
    updateUserController
  );

  usersRoutes.delete(
    "/:id",
    tokenValidCheckMiddleware,
    userIdExistsCheckMiddleware,
    adminVerifyMiddleware,
    deleteUserController
  );

export { usersRoutes };
