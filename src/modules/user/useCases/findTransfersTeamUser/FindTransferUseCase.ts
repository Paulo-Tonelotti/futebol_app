import { injectable } from 'tsyringe';

@injectable()
class FindTransferUseCase {
  async execute(date: string, teamId: string): Promise<any[]> {
    const url = 'https://v3.football.api-sports.io/transfers?team';
    const result = await fetch(`${url}=${teamId}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'a4f8e92baab346efa89c7c26edbf56fe',
      },
    })
      .then(async (response) => await response.json())
      .then((json) => {
        const result = json.response.map((p: any) => {
          return {
            player: p.player,
            transfers: p.transfers,
          };
        });
        return result;
      });

    const resultado: object[] = [];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].transfers.length; j++) {
        const ano = new Date(result[i].transfers[j].date).getFullYear();
        if (ano.toString() === date) {
          const objResp = {
            player: result[i].player,
            transfers: result[i].transfers[j],
          };
          resultado.push(objResp);
        }
      }
    }
    return resultado;
  }
}

export { FindTransferUseCase };
