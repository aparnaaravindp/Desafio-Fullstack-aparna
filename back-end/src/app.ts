import "reflect-metadata";
import express, { Application } from "express";
import "express-async-errors";
import { handleErrors } from "./error";
import { usersRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
