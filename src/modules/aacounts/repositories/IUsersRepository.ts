import { Team } from "../../teams/entities/Team";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  saveTeam(id:string, team: Team): Promise<void>;
}

export { IUsersRepository }