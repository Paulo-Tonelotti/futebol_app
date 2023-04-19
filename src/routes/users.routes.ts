import { Router } from "express";
import { CreateUserController } from "../modules/aacounts/createUser/CreateUserCotnroller";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();


usersRoutes.post("/", createUserController.handle);

export { usersRoutes };