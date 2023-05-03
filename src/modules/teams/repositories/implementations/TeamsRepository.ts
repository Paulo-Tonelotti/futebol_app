import prismaClient from '../../../../db';
import { League } from '../../entities/League';
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

  async saveLeague(team_id: string, league: League): Promise<void> {}
}

export { TeamsRepository };
