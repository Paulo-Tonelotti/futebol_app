import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
  }
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, password }: IRequest): Promise<IResponse> {

    const user = await this.usersRepository.findByName(name);

    if(!user) {
      throw new Error("Username or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Username or password incorrect");
    }

    const token  = sign({}, "96c920d74568b22fe1c158438ffb1c29", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase }
