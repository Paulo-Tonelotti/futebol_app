import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IResponseUserCreated {
  user: {
    id: string;
    name: string;
  };
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    email,
    password,
    name,
  }: ICreateUserDTO): Promise<IResponseUserCreated> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const userCreated = await this.usersRepository.create({
      email,
      password: passwordHash,
      name,
    });

    const userResponse: IResponseUserCreated = {
      user: {
        id: userCreated.id,
        name: userCreated.name,
      },
    };

    return userResponse;
  }
}

export { CreateUserUseCase };
