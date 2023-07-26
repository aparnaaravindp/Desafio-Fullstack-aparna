import { Router } from "express";
import inputDataValidCheckMiddleWare from "../middlewares/inputDataValidCheck.middleware";
import { loginRequestSchema } from "../schemas/login.schemas";
import { loginController } from "../controllers/login.controllers";

const loginRoutes: Router = Router();
loginRoutes.post(
  "",
  inputDataValidCheckMiddleWare(loginRequestSchema),
  loginController
);

export { loginRoutes };
