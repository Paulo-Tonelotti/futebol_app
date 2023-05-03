import prismaClient from '../../../../db';
import { League } from '../../../leagues/entities/League';
import { Team } from '../../entities/Team';
import { ITeamsRepository } from '../ITeamsRepository';

class TeamsRepository implements ITeamsRepository {
  async findTeam(id: string): Promise<Team> {
    const team: Team | undefined = await prismaClient.teamUser.findFirst({
      where: {
        id,
      },
    });

    return team;
  }

  async saveTeam(team: Team): Promise<void> {
    await prismaClient.teamUser.create({
      data: {
        id: team.id.toString(),
        name: team.name,
        country: team.country,
        logo: team.logo,
      },
    });
  }

  async saveLeague(league: League): Promise<void> {
    await prismaClient.league.create({
      data: {
        id: league.id.toString(),
        name: league.name,
        logo: league.logo,
      },
    });
  }

  async updateLeagueTeam(team_id: string, league_Id: string): Promise<void> {
    await prismaClient.teamUser.update({
      where: {
        id: team_id,
      },
      data: {
        league_id: league_Id,
      },
    });
  }

  async findLeague(id: string): Promise<League> {
    const league = await prismaClient.league.findFirst({
      where: {
        id,
      },
    });
    return league;
  }
}

export { TeamsRepository };
