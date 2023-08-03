import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive().int(),
  fullname: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.number().int(),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const usersSchemaResponse = z.array(userSchemaResponse);

const userUpdateSchemaRequest = userSchemaRequest.partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userUpdateSchemaRequest,
};
