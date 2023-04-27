import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindTransferUseCase } from "./FindTransferUseCase";

class FindTransferController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { date, teamId } = request.body;
    const findTransferUseCase = container.resolve(FindTransferUseCase);

    try {
      const transfers = await findTransferUseCase.execute(date, teamId);
      return response.status(200).json(transfers);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { FindTransferController };
