import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const deleteUsersServices = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userData: User | null = await userRepository.findOneBy({
    id: userId,
  });
  if (!userData) {
    throw new AppError("User not found", 404);
  } else {
    const deleteUserData: User = await userRepository.remove(userData);
  }
};

export default deleteUsersServices;
