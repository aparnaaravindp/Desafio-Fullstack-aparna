import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive().int(),
  fullname: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.number().int(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  registrationDate: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const usersSchemaResponse = z.array(userSchemaResponse);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
};
