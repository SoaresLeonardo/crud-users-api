import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

const userRepository = new UsersRepository();
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export default getAllUsersController;
