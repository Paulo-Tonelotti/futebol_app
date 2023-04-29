import { inject, injectable } from 'tsyringe';
import { TeamsRepository } from '../../../teams/repositories/implementations/TeamsRepository';
import { Team } from '../../../teams/entities/Team';

@injectable()
class AddTeamUserUseCase {
  constructor(
    @inject('TeamsRepository') private readonly teamsRepository: TeamsRepository
  ) {}

  async execute(name: string, id: string): Promise<void> {
    const team = await this.findTeam(name);

    const teamUserRegistered = await this.teamsRepository.findTeamByIdUser(id);

    if (teamUserRegistered != null) {
      await this.teamsRepository.updateTeam(id, team);
    } else {
      await this.teamsRepository.saveTeam(id, team);
    }
  }

  async findTeam(name: string): Promise<Team> {
    const url = 'https://v3.football.api-sports.io/teams?name';
    try {
      const result = await fetch(`${url}=${name}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'a4f8e92baab346efa89c7c26edbf56fe',
        },
      })
        .then(async (response) => await response.json())
        .then((json) => {
          return json;
        });

      const team = new Team(
        result.response[0].team.id,
        result.response[0].team.name,
        result.response[0].team.country,
        result.response[0].team.logo
      );

      return team;
    } catch (error) {
      throw new Error('Erro ao buscar time');
    }
  }
}

export { AddTeamUserUseCase };
