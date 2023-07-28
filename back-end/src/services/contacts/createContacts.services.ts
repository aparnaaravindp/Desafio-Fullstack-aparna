import { Repository } from "typeorm";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { Contact, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { contactSchemaResponse } from "../../schemas/contacts.schema";
import { AppError } from "../../error";

const createContactsServices = async (
  contactData: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 409);
  }

  const contact: Contact = contactRepository.create({ ...contactData, user });
  await contactRepository.save(contact);

  const returnContact: TContactResponse = contactSchemaResponse.parse(contact);
  return returnContact;
};

export default createContactsServices;
