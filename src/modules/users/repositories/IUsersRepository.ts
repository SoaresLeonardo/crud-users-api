import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { IDeleteUserDTO } from "../dtos/DeleteUserDTO";
import { IUpdateUserDTO } from "../dtos/UpdateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(data: IUpdateUserDTO): Promise<User>;
  delete(userId: IDeleteUserDTO): Promise<void>;
  list(): Promise<User[] | null>;
}
