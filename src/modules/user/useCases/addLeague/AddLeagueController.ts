import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AddLeagueUseCase } from './AddLeagueUseCase';

class AddLeagueController {
  async handle(request: Request, response: Response) {
    const { team_id } = request.body;
    const addLeagueUseCase = container.resolve(AddLeagueUseCase);
    try {
      await addLeagueUseCase.execute(team_id);
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { AddLeagueController };
