import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
  constructor(
  @inject("UsersRepository")
  private usersRepository: UsersRepository
  ) {}

  async execute({ name, password}: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByName(name);

    if(userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passwordHash
    })
  }
}


export { CreateUserUseCase };