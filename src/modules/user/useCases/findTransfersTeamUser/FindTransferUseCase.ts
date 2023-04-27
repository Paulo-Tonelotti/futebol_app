import { injectable } from "tsyringe";

@injectable()
class FindTransferUseCase {
  async execute(date: string, teamId: string): Promise<Array<any>> {
    const url = "https://v3.football.api-sports.io/transfers?team";
    const result = await fetch(`${url}=${teamId}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "a4f8e92baab346efa89c7c26edbf56fe",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let filter = [];
        let data = json.response.map(
          (element: { transfers: any }) => element.transfers
        );
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].length; j++) {
            const ano = new Date(data[i][j].date).getFullYear();
            if (ano.toString() === date) {
              filter.push({ player: data[i].player, transfers: data[i][j] });
            }
          }
        }
        return filter;
      });

    return result;
  }
}

export { FindTransferUseCase };
