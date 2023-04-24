import prismaClient from "../../../../db";
import { Team } from "../../../teams/entities/Team";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({ name, password, email }: ICreateUserDTO): Promise<void> {
    await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
  async findById(id: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}

export { UsersRepository };
