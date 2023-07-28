import { Request, Response } from "express";
import { TContactRequest, TContactResponse, TContactUpdateRequest } from "../interfaces/contacts.interfaces";
import createContactsServices from "../services/contacts/createContacts.services";
import listContactsServices from "../services/contacts/listContacts.services";
import updateCotactsServices from "../services/contacts/updateContacts.services";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TContactRequest = req.body;
  const userId: number = res.locals.id;
  const newContact = await createContactsServices(contactData, userId);
  return res.status(201).json(newContact);
};

const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = res.locals.id;
  const contacts = await listContactsServices(userId);
  return res.status(200).json(contacts);
};

const updateCotactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TContactUpdateRequest = req.body;
  const contactId: number = parseInt(req.params.id);
  const newCotact: TContactResponse = await updateCotactsServices(contactData, contactId);
  return res.json(newCotact);
};



export { createContactController, listContactsController, updateCotactController};
