import { Router } from "express";
import inputDataValidCheckMiddleWare from "../middlewares/inputDataValidCheck.middleware";
import {
  contactSchemaRequest,
  contactUpdateSchemaRequest,
} from "../schemas/contacts.schema";
import { emailExistsCheckMiddleware } from "../middlewares/emailExistsCheck.middleware";
import {
  createContactController,
  deleteCotactController,
  listContactsController,
  updateCotactController,
} from "../controllers/contacts.controllers";
import { tokenValidCheckMiddleware } from "../middlewares/tokenValidCheck.middleware";
import {
  deleteUserController,
  listUsersController,
} from "../controllers/users.controllers";
import { ownerVerifyMiddleware } from "../middlewares/ownerVerify.middleware";
/* import { ownerVerifyMiddleware } from "../middlewares/ownerVerify.middleware"; */

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  tokenValidCheckMiddleware,
  inputDataValidCheckMiddleWare(contactSchemaRequest),
  emailExistsCheckMiddleware,
  createContactController
);

contactsRoutes.get("", tokenValidCheckMiddleware, listContactsController);

contactsRoutes.patch(
  "/:id",
  tokenValidCheckMiddleware,
  ownerVerifyMiddleware,
  inputDataValidCheckMiddleWare(contactUpdateSchemaRequest),
  updateCotactController
);

contactsRoutes.delete(
  "/:id",
  tokenValidCheckMiddleware,
  ownerVerifyMiddleware,
  deleteCotactController
);

export { contactsRoutes };
