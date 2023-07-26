import "reflect-metadata";
import express, { Application } from "express";
import { handleErrors } from "./error";
import { usersRoutes } from "./routes/users.routes";


const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);

app.use(handleErrors);


export default app;
