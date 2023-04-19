import "reflect-metadata";
import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/aacounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/aacounts/repositories/implementations/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)