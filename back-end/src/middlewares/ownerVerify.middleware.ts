import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { Repository } from "typeorm";

const ownerVerifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactId: number= parseInt(req.params.id);
  const userId = res.locals.id;

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }
console.log(contact, userId)
  if (contact?.user.id !== parseInt(userId)) {
    return res.status(403).json({
      message: "Insufficient permission",
    });
  }

  return next();
};

export { ownerVerifyMiddleware };
 