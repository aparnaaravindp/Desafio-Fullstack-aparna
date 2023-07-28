import { Router } from "express";
import inputDataValidCheckMiddleWare from "../middlewares/inputDataValidCheck.middleware";
import { contactSchemaRequest } from "../schemas/contacts.schema";
import { emailExistsCheckMiddleware } from "../middlewares/emailExistsCheck.middleware";
import { createContactController } from "../controllers/contacts.controllers";
import { tokenValidCheckMiddleware } from "../middlewares/tokenValidCheck.middleware";
import { listUsersController } from "../controllers/users.controllers";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  inputDataValidCheckMiddleWare(contactSchemaRequest),
  emailExistsCheckMiddleware,
  createContactController
);

contactsRoutes.get("", tokenValidCheckMiddleware, listUsersController);

/*   usersRoutes.patch(
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
  );  */

export { contactsRoutes };
