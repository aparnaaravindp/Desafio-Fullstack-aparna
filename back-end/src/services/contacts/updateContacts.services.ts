import { Repository } from "typeorm";
import {
  TContactResponse,
  TContactUpdateRequest,
} from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { contactSchemaResponse } from "../../schemas/contacts.schema";

const updateCotactsServices = async (
  contactData: TContactUpdateRequest,
  contactId: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldCotactData: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!oldCotactData) {
    throw new AppError("Contact not found", 404);
  }

  const newCotactData: Contact = contactRepository.create({
    ...oldCotactData,
    ...contactData,
  });

  await contactRepository.save(newCotactData);

  const returnCotact: TContactResponse =
    contactSchemaResponse.parse(newCotactData);
  return returnCotact;
};

export default updateCotactsServices;
