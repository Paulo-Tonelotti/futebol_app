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
        const result = json.response.map((p: any) => {
          player: p.player;
          transfers: p.transfers;
        });

        return result;
      });

    return result;
  }
}

export { FindTransferUseCase };
