import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUsersServices = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  userData.password = await hash(userData.password, 10);
  const user: User = userRepository.create(userData);
  await userRepository.save(user);

  const returnUser: TUserResponse = userSchemaResponse.parse(user);
  return returnUser;
};

export default createUsersServices;
