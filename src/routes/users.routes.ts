import { Router } from 'express';
import { CreateUserController } from '../modules/user/useCases/createUser/CreateUserController';
import { AddTeamUserController } from '../modules/user/useCases/addTeamUser/AddTeamUserController';
import { FindTransferController } from '../modules/user/useCases/findTransfersTeamUser/FindTransferController';
import { AddLeagueController } from '../modules/user/useCases/addLeague/AddLeagueController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const addTeamUserController = new AddTeamUserController();
const findTransferController = new FindTransferController();
const addLeagueController = new AddLeagueController();

usersRoutes.post('/users', createUserController.handle);
usersRoutes.post('/users/addTeam', addTeamUserController.handle);
usersRoutes.get('/users/findTransfer', findTransferController.handle);

usersRoutes.post('/users/addLeague', addLeagueController.handle);

export { usersRoutes };
