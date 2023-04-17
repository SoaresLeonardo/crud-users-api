import { ApiError } from "../../../../shared/middleware/ApiError";
import { prisma } from "../../../../shared/services/prisma";
import { User } from "@prisma/client";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUpdateUserDTO } from "../../dtos/UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUsersRepository) {}
  async execute({ id, name, email }: IUpdateUserDTO): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new ApiError("User not found", 404);
    }

    await this.userRepository.update({ id, name, email });

    const updateUser = await prisma.user.findUnique({ where: { id } });

    return updateUser;
  }
}
