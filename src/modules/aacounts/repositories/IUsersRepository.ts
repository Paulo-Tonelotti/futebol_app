import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
  findByName(name: string): Promise<User>;
}

export { IUsersRepository }