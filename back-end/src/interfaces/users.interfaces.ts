import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUser = z.infer<typeof userSchema>;
type TEmail = {
  email: string;
};

type TUsersResponse = z.infer<typeof usersSchemaResponse>;

type TUserUpdateRequest = DeepPartial<TUserRequest>;

export {
  TUserRequest,
  TUserResponse,
  TUser,
  TEmail,
  TUsersResponse,
  TUserUpdateRequest,
};
