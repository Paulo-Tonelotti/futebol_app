import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ITeamsRepository } from "../../../teams/repositories/ITeamsRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
  };
  team: {
    name: string;
    country: string;
    id: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("TeamsRepository") private teamsRepository: ITeamsRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Username or password incorrect");
    }

    const token = sign({}, "96c920d74568b22fe1c158438ffb1c29", {
      subject: user.id,
      expiresIn: "1d",
    });

    const team = await this.teamsRepository.findTeamByIdUser(user.id);

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
      },
      team: {
        name: team.name,
        country: team.country,
        id: team.id,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
