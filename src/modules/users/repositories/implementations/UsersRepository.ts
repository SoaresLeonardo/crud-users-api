import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { prisma } from "../../../../shared/services/prisma";
import { IDeleteUserDTO } from "../../dtos/DeleteUserDTO";
import { IUpdateUserDTO } from "../../dtos/UpdateUserDTO";

export class UsersRepository implements IUsersRepository {
  // Create User
  async create({ name, email }: ICreateUserDTO): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return createdUser;
  }

  // Get Users
  async list(): Promise<User[] | null> {
    const listUsers = await prisma.user.findMany();

    return listUsers;
  }

  // Search by id
  async listById({ id }: IDeleteUserDTO): Promise<User | null> {
    const listUserById = await prisma.user.findUnique({ where: { id: id } });

    return listUserById;
  }

  // Update Users
  async update({ id, name, email }: IUpdateUserDTO): Promise<User> {
    const updateUser = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    return updateUser;
  }

  // Delete User
  async delete({ id }: IDeleteUserDTO): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
