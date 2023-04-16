import { User } from "@prisma/client";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetAllUsersUseCase {
  constructor(private readonly useRepository: IUsersRepository) {}
  async execute(): Promise<User[] | null> {
    const users = await this.useRepository.list();

    return users;
  }
}
