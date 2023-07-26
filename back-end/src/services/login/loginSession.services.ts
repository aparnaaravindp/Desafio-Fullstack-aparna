import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import "dotenv/config";

const loginSessionServices = async (
    loginData: TLoginRequest
  ): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user: User | null = await userRepository.findOneBy({
      email: loginData.email,
    });
  
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }
    const comparePassword: boolean = await compare(
      loginData.password,
      user.password
    );
    if (!comparePassword) {
      throw new AppError("Invalid credentials", 401);
    }
  
    const token = jwt.sign({}, String(process.env.SECRET_KEY), {
      expiresIn: "24h",
      subject: String(user.id),
    });
  
    return token;
  };
  
  export default loginSessionServices;
  