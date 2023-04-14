import { ApiError } from "../../../../middleware/ApiError";
import { prisma } from "../../../../services/prisma";
import { User } from "@prisma/client";
import { UpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  async execute({ id, name, email }: UpdateUserDTO): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
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

    await prisma.user.update({
      where: { id: id },
      data: { name, email },
    });

    const updateUser = await prisma.user.findUnique({ where: { id: id } });

    return updateUser;
  }
}
