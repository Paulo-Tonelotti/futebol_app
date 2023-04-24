import { Router } from "express";
import { CreateUserController } from "../modules/aacounts/useCases/createUser/CreateUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";
import { AddTeamUserController } from "../modules/user/useCases/AddTeamUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const addTeamUserController = new AddTeamUserController();

usersRoutes.post("/users", createUserController.handle);
usersRoutes.post("/users/addTeam", ensureAuthenticate, addTeamUserController.handle)

export { usersRoutes };