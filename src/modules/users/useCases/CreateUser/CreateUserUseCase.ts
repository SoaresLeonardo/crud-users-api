import { User } from "@prisma/client";
import { prisma } from "../../../../shared/services/prisma";
import { ApiError } from "../../../../shared/middleware/ApiError";
import { ICreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUsersRepository) {}

  async execute({ name, email }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Validations
    if (userAlreadyExists) {
      throw new ApiError("User already exists", 422);
    }

    // create user
    const user = await this.userRepository.create({
      name,
      email,
    });

    return user;
  }
}
