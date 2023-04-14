import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { prisma } from "../../../services/prisma";
import { IDeleteUserDTO } from "../../dtos/DeleteUserDTO";

export class UsersRepository implements IUsersRepository {
  async create({ name, email }: ICreateUserDTO): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return createdUser;
  }

  async list(): Promise<User[] | null> {
    const listUsers = await prisma.user.findMany();

    return listUsers;
  }

  update(data: ICreateUserDTO): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async delete({ id }: IDeleteUserDTO): Promise<void> {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
