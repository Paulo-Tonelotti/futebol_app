
import { Team } from "../entities/Team";


interface ITeamsRepository {
  findTeam(name: string): Promise<Team>;
}


export { ITeamsRepository }