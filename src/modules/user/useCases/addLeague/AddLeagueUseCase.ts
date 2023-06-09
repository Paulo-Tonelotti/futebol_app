import { inject, injectable } from 'tsyringe';
import { ITeamsRepository } from '../../../teams/repositories/ITeamsRepository';
import { League } from '../../../leagues/entities/League';

@injectable()
class AddLeagueUseCase {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(team_id: string): Promise<void> {
    const league = await this.findLeague(team_id);
    const leagueAlreadyRegistered = await this.teamsRepository.findLeague(
      league.id.toString()
    );
    if (leagueAlreadyRegistered) {
      await this.teamsRepository.updateLeagueTeam(
        team_id,
        leagueAlreadyRegistered.id
      );
    } else {
      await this.teamsRepository.saveLeague(league);
      await this.teamsRepository.updateLeagueTeam(team_id, league.id);
    }
  }

  async findLeague(team_id: string): Promise<League> {
    const url = 'https://v3.football.api-sports.io/leagues?team';
    try {
      const result = await fetch(`${url}=${team_id}`, {
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

      console.log(result.response[0].league.id);

      const league = new League(
        result.response[0].league.id,
        result.response[0].league.name,
        result.response[0].league.logo
      );

      return league;
    } catch {
      throw new Error('Erro ao buscar liga');
    }
  }
}

export { AddLeagueUseCase };
