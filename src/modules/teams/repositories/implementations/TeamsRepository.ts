import prismaClient from "../../../../db";
import { Team } from "../../entities/Team";
import { ITeamsRepository } from "../ITeamsRepository";


class TeamsRepository implements ITeamsRepository {
  async findTeam(name: string): Promise<Team> {
    const team = await prismaClient.teamUser.findFirst({
      where: {
        name
      }
    })

    return team;
  }

}

export { TeamsRepository };