import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController"; 
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";
import { AddTeamUserController } from "../modules/user/useCases/addTeamUser/AddTeamUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const addTeamUserController = new AddTeamUserController();

usersRoutes.post("/users", createUserController.handle);
usersRoutes.post("/users/addTeam", ensureAuthenticate, addTeamUserController.handle)

export { usersRoutes };