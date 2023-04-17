import { User } from "@prisma/client";
import { prisma } from "../../../../shared/services/prisma";
import { ApiError } from "../../../../shared/middleware/ApiError";
import { ICreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { validateEmail } from "../../validators/EmailValidator";
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUsersRepository) {}

  async execute({ name, email }: ICreateUserDTO): Promise<User> {
    // Looking for user
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Validations
    if (userAlreadyExists) {
      throw new ApiError("User already exists", 422);
    }
    
    if (!name) {
      throw new ApiError("Name was not provided in the request", 400);
    }

    if (!email) {
      throw new ApiError("E-mail was not provided in the request", 400);
    }

    if (!validateEmail(email)) {
      throw new ApiError("Invalid email", 400);
    }



    // create user
    const user = await this.userRepository.create({
      name,
      email,
    });

    return user;
  }
}
