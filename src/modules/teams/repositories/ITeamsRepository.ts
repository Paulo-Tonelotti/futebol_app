import { League } from '../entities/League';
import { Team } from '../entities/Team';

interface ITeamsRepository {
  findTeam(name: string): Promise<Team>;
  saveTeam(team: Team): Promise<void>;
  saveLeague(team_id: string, league: League): Promise<void>;
}

export { ITeamsRepository };
