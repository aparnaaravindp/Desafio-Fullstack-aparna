import { Request, Response } from "express";
import { TContactRequest } from "../interfaces/contacts.interfaces";
import createContactsServices from "../services/contacts/createContacts.services";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TContactRequest = req.body;
  const userId: number = res.locals.id;
  const newContact = await createContactsServices(contactData, userId);
  return res.status(201).json(newContact);
};

export { createContactController };
