import { User } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { CreateUserDTO } from "./CreateUserDTO";
import { ApiError } from "../../../../middleware/ApiError";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    // check if my user already exists
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new ApiError("User already exists", 422, false);
    }

    // create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
