import { Router } from "express";
import { CreateUserController } from "./modules/users/useCases/CreateUser/CreateUserController";
import { GetAllUsersController } from "./modules/users/useCases/GetAllUsers/GetAllUsersController";

const routes = Router();

const createUserUseController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

routes.get("/", getAllUsersController.handle);
routes.post("/", createUserUseController.handle);

export default routes;
