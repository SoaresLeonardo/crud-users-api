import { User } from "@prisma/client";
import { prisma } from "../../../../services/prisma";
import { ApiError } from "../../../../middleware/ApiError";
import { IDeleteUserDTO } from "../../../dtos/DeleteUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(private readonly useRepository: IUsersRepository) {}
  async execute({ id }: IDeleteUserDTO): Promise<User> {
    // searching user by id
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    // Validations
    if (!user) {
      throw new ApiError("User not found", 404);
    }

    // Delete user
    await this.useRepository.delete({ id });

    return user;
  }
}
