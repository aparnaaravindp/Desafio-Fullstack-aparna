import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const deleteCotactsServices = async (contactId: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactData: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });
  if (!contactData) {
    throw new AppError("Cotact not found", 404);
  } else {
    const deleteCotactData: Contact = await contactRepository.remove(
      contactData
    );
  }
};

export default deleteCotactsServices;
