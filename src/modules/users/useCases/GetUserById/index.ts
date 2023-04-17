import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { GetUserByIdController } from "./GetUserByIdController";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

const usersRepository = new UsersRepository();
const getUserByIdUseCase = new GetUserByIdUseCase(usersRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export default getUserByIdController;
