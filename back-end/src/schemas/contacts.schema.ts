import { z } from "zod";
import { userSchema } from "./users.schema";

const contactSchema = z.object({
  id: z.number(),
  fullname: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.number().int(),
  createdAt: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactSchemaResponse = contactSchema;

const contactsSchemaResponse = z.array(contactSchemaResponse);

const contactUpdateSchemaRequest = contactSchemaRequest.partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactsSchemaResponse,
  contactUpdateSchemaRequest,
};
