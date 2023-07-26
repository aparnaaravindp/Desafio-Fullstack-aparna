import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUser = z.infer<typeof userSchema>;
type TEmail = {
  email: string;
};


type TUsersResponse = z.infer<typeof usersSchemaResponse>;

export { TUserRequest, TUserResponse, TUser, TEmail, TUsersResponse };
