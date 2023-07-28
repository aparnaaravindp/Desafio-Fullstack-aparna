import { Repository } from "typeorm";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";
import { Contact, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { contactsSchemaResponse } from "../../schemas/contacts.schema";

const listContactsServices = async (
  userId: number
): Promise<TContactsResponse> => {
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

  const contacts: Contact[] = await contactRepository.find();

  const returnContacts: TContactsResponse =
    contactsSchemaResponse.parse(contacts);
  return returnContacts;
};

export default listContactsServices;
