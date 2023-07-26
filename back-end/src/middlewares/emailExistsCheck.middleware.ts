import { NextFunction, Request, Response} from "express";
import { TEmail } from "../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const emailExistsCheckMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { email }: TEmail = req.body;
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const userEmail = await userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (userEmail) {
      throw new AppError("Email already exists", 409);
    }
  
    return next();
  };
  
  export { emailExistsCheckMiddleware };
  