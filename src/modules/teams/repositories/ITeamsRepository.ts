import { League } from '../../leagues/entities/League';
import { Team } from '../entities/Team';

interface ITeamsRepository {
  findTeam(name: string): Promise<Team>;
  saveTeam(team: Team): Promise<void>;
  saveLeague(league: League): Promise<void>;
  updateLeagueTeam(team_id: string, league_id: string): Promise<void>;
  findLeague(id: string): Promise<League>;
}

export { ITeamsRepository };
