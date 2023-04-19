import prismaClient from "../../../../db";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
  async create({ name, password }: ICreateUserDTO): Promise<void> {
    await prismaClient.user.create({
      data: {
        name,
        password
      }
    })

  }
  async findById(id: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    })

    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        name
      }
    })

    return user;
  }

}

export { UsersRepository };