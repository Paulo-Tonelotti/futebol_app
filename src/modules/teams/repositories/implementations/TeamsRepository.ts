import prismaClient from "../../../../db";
import { User } from "../../../user/entities/User";
import { Team } from "../../entities/Team";
import { ITeamsRepository } from "../ITeamsRepository";

class TeamsRepository implements ITeamsRepository {
  async findTeam(name: string): Promise<Team> {
    const team = await prismaClient.teamUser.findFirst({
      where: {
        name,
      },
    });

    return team;
  }

  async findTeamByIdUser(id: string): Promise<Team> {
    const team = await prismaClient.teamUser.findFirst({
      where: {
        userId: id,
      },
    });
    return team;
  }

  async updateTeam(id: string, team: Team): Promise<void> {
    await prismaClient.teamUser.update({
      where: {
        userId: id,
      },
      data: {
        id: team.id.toString(),
        name: team.name,
        country: team.country,
        userId: id,
      },
    });
  }

  async saveTeam(id: string, team: Team): Promise<void> {
    await prismaClient.teamUser.create({
      data: {
        id: team.id.toString(),
        name: team.name,
        country: team.country,
        userId: id,
      },
    });
  }
}

export { TeamsRepository };
