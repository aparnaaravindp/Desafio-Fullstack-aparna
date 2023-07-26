import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schema";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUser = z.infer<typeof userSchema>;
type TEmail = {
  email: string;
};

export { TUserRequest, TUserResponse, TUser, TEmail };
