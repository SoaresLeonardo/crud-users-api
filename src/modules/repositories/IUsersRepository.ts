import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { IDeleteUserDTO } from "../dtos/DeleteUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  list(): Promise<User[] | null>;
  update(data: ICreateUserDTO): Promise<User>;
  delete(userId: IDeleteUserDTO): Promise<void>;
}
