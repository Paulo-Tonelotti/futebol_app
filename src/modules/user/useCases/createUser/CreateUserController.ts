import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, email } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      const userCreated = await createUserUseCase.execute({
        name,
        password,
        email,
      });

      return response.status(201).json(userCreated);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export { CreateUserController };
