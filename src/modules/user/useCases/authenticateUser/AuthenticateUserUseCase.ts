import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ITeamsRepository } from '../../../teams/repositories/ITeamsRepository';
import { Team } from '../../../teams/entities/Team';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
  };
  team: Team | undefined;
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TeamsRepository') private teamsRepository: ITeamsRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Username or password incorrect');
    }

    const token = sign({}, '96c920d74568b22fe1c158438ffb1c29', {
      subject: user.id,
      expiresIn: '1d',
    });

    let team: Team | undefined;
    if (user.team_id) {
      team = await this.teamsRepository.findTeam(user.team_id);
    }

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
      },
      team,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
