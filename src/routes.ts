import { Router } from "express";
import createUserController from "./modules/users/useCases/CreateUser";
import getAllUsersController from "./modules/users/useCases/GetAllUsers";
import deleteUserController from "./modules/users/useCases/DeleteUser";

const routes = Router();

routes.get("/users", (req, res) => getAllUsersController.handle(req, res));
routes.post("/users", (req, res) => createUserController.handle(req, res));
routes.delete("/users/:id", (req, res) => deleteUserController.handle(req, res));

export default routes;
