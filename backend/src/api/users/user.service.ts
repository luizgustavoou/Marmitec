import { ICreateUserRequestDTO } from "./dtos/ICreateUserRequestDTO";
import { IUserRepository } from "./repositories/IUserRepository";

export class UserService {
  constructor(private readonly UserRepository: IUserRepository) {}

  async createUser(data: ICreateUserRequestDTO) {
    await this.UserRepository.save(data);
  }

  async findUsers() {
    const users = await this.UserRepository.findMany();

    return users;
  }

  async findUserByEmail(email: string) {
    const user = await this.UserRepository.findOneByEmail(email);

    return user;
  }
}
