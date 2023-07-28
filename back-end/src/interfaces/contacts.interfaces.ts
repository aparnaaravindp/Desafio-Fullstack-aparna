import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContact = z.infer<typeof contactSchema>;
type TEmail = {
  email: string;
};

type TContactsResponse = z.infer<typeof contactsSchemaResponse>;

type TContactUpdateRequest = DeepPartial<TContactRequest>;

export {
  TContactRequest,
  TContactResponse,
  TContact,
  TEmail,
  TContactsResponse,
  TContactUpdateRequest,
};
