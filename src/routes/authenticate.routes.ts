import { Router } from 'express';
import { AuthenticateUserController } from '../modules/user/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/login', authenticateUserController.handle);

export { authenticateRoutes };
