import prismaClient from '../../../../db';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  async create({ name, password, email }: ICreateUserDTO): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
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

  async updateTeam(id: string, id_user: string): Promise<void> {
    await prismaClient.user.update({
      where: {
        id: id_user,
      },
      data: {
        team_id: id,
      },
    });
  }
}

export { UsersRepository };
