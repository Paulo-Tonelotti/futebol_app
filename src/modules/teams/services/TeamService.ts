import { Team } from "../entities/Team";
const url = "https://v3.football.api-sports.io/teams?name"

export class TeamService {

  async findTeamByName(name: string): Promise<Team> {
   try {
    const resultFindTeam = await fetch(`${url}=${name}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "5bed3d2a933f026c8bfd0b7befc69c69"
      }
    })
    .then(res => res.json())
    .then(json => {
      return json
    })

    const team = new Team(
      resultFindTeam.response[0].team.id,
      resultFindTeam.response[0].team.name,
      resultFindTeam.response[0].team.country)
    
    return team;

   } catch (error) {
      throw new Error("Erro ao buscar time");
   }
  }
}