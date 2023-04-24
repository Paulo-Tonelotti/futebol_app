import { Team } from "../entities/Team";

interface ITeamsRepository {
  findTeam(name: string): Promise<Team>;
  findTeamByIdUser(id: string): Promise<Team>;
  updateTeam(id: string, team: Team): Promise<void>;
  saveTeam(id: string, team: Team): Promise<void>;
}

export { ITeamsRepository };
