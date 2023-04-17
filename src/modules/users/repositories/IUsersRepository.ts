import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { IDeleteUserDTO } from "../dtos/DeleteUserDTO";
import { IUpdateUserDTO } from "../dtos/UpdateUserDTO";
import { IGetUserByIdDTO } from "../dtos/GetUserById";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(data: IUpdateUserDTO): Promise<User>;
  delete(data: IDeleteUserDTO): Promise<void>;
  listById(data: IGetUserByIdDTO): Promise<User | null>;
  list(): Promise<User[] | null>;
}
