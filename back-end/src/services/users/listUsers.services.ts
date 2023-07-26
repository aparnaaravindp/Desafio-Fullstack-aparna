import { Repository } from "typeorm";
import { TUsersResponse } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { usersSchemaResponse } from "../../schemas/users.schema";

const listUsersServices = async (): Promise<TUsersResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const users: User[] = await userRepository.find();
    const returnUsers: TUsersResponse = usersSchemaResponse.parse(users);
    return returnUsers;
  };
  
  export default listUsersServices;