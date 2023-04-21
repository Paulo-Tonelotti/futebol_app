import "reflect-metadata";
import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/aacounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/aacounts/repositories/implementations/UsersRepository";
import { ITeamsRepository } from "../../modules/teams/repositories/ITeamsRepository";
import { TeamsRepository } from "../../modules/teams/repositories/implementations/TeamsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<ITeamsRepository>(
  "TeamsRepository",
  TeamsRepository
)