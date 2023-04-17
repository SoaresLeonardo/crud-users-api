import { Router } from "express";
import createUserController from "./modules/users/useCases/CreateUser";
import getAllUsersController from "./modules/users/useCases/GetAllUsers";
import deleteUserController from "./modules/users/useCases/DeleteUser";
import updateUserController from "./modules/users/useCases/UpdateUser";
import getUserByIdController from "./modules/users/useCases/GetUserById";

const routes = Router();

// Crud
routes.get("/users", (req, res) => getAllUsersController.handle(req, res));
routes.get("/users/:id", (req, res) => getUserByIdController.handle(req, res));
routes.post("/users", (req, res) => createUserController.handle(req, res));
routes.put("/users/:id", (req, res) => updateUserController.handle(req, res));
routes.delete("/users/:id", (req, res) =>
  deleteUserController.handle(req, res)
);

export default routes;
