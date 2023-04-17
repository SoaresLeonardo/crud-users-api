import { User } from "@prisma/client";
import { IGetUserByIdDTO } from "../../dtos/GetUserById";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { prisma } from "../../../../shared/services/prisma";
import { ApiError } from "../../../../shared/middleware/ApiError";

export class GetUserByIdUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({ id }: IGetUserByIdDTO): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    // Validations
    if (!user) {
      throw new ApiError("User not found", 404);
    }

    const listUserById = await this.usersRepository.listById({ id });

    return listUserById;
  }
}
