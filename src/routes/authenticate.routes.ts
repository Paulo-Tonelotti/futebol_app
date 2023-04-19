import { Router } from "express";
import { AuthenticateUserController } from "../modules/aacounts/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();


const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };