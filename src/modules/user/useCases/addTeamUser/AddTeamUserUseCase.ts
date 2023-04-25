import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { TeamsRepository } from "../../../teams/repositories/implementations/TeamsRepository";
import { TeamService } from "../../../teams/services/TeamService";

@injectable()
class AddTeamUserUseCase {
  constructor(
    @inject("TeamsRepository") private teamsRepository: TeamsRepository
  ) {}

  async execute(name: string, id: string): Promise<void> {
    const teamService = new TeamService();
    const team = await teamService.findTeamByName(name);

    const teamUserRegistered = await this.teamsRepository.findTeamByIdUser(id);

    if (teamUserRegistered != null) {
      await this.teamsRepository.updateTeam(id, team);
    } else {
      await this.teamsRepository.saveTeam(id, team);
    }
  }
}

export { AddTeamUserUseCase };
