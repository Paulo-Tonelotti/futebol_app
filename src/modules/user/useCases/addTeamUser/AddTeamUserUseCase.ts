import { inject, injectable } from 'tsyringe';
import { Team } from '../../../teams/entities/Team';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ITeamsRepository } from '../../../teams/repositories/ITeamsRepository';

@injectable()
class AddTeamUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('TeamsRepository') private teamsRepository: ITeamsRepository
  ) {}

  async execute(name: string, id: string): Promise<void> {
    const team = await this.findTeam(name);
    const user = await this.usersRepository.findById(id);

    const teamAlreadyExists = await this.teamsRepository.findTeam(
      team.id.toString()
    );

    if (teamAlreadyExists) {
      await this.usersRepository.updateTeam(teamAlreadyExists.id, user.id);
    } else {
      await this.teamsRepository.saveTeam(team);
      await this.usersRepository.updateTeam(team.id.toString(), user.id);
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
