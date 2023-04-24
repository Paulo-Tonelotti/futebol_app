import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddTeamUserUseCase } from "./AddTeamUserUseCase";


class AddTeamUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, id } = request.body;
    const addTeamUserUseCase = container.resolve(AddTeamUserUseCase);

    try{
      await addTeamUserUseCase.execute(name, id);
      return response.status(200).send();
    } catch(err) {
      return response.status(400).json({ error: err.message });
    }
  }
}


export { AddTeamUserController };