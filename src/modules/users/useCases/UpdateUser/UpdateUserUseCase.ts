import { ApiError } from "../../../../middleware/ApiError";
import { prisma } from "../../../../services/prisma";
import { User } from "@prisma/client";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUpdateUserDTO } from "../../../dtos/UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUsersRepository) {}
  async execute({ id, name, email }: IUpdateUserDTO): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!id) {
      throw new ApiError("User ID not provided", 400);
    }

    if (!user) {
      throw new ApiError("User not found", 404);
    }

    if (!name) {
      throw new ApiError("User name not provided", 404);
    }

    if (!email) {
      throw new ApiError("User email not provided", 404);
    }

    await this.userRepository.update({ id, name, email });

    const updateUser = await prisma.user.findUnique({ where: { id } });

    return updateUser;
  }
}
