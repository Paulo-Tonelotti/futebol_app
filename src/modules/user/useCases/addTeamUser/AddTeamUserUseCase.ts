import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository"; 
import { TeamsRepository } from "../../../teams/repositories/implementations/TeamsRepository";
import { TeamService } from "../../../teams/services/TeamService";

@injectable()
class AddTeamUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  , @inject("TeamsRepository") private teamsRepository: TeamsRepository) {}


  async execute(name: string, id: string): Promise<void> {
    const teamService = new TeamService();
    const teamAlreadyExists = await this.teamsRepository.findTeam(name);

    if(teamAlreadyExists) {
      throw new Error(`Team ${name} already exists`);
    }

    const team = await teamService.findTeamByName(name);
    console.log(typeof team)
    await this.usersRepository.saveTeam(id, team);
  }

}

export { AddTeamUserUseCase };