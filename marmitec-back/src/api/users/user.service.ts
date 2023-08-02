import { ICreateUserRequestDTO } from "./dtos/ICreateUserRequestDTO";
import { IUserRepository } from "./repositories/IUserRepository";

export class UserService {
  constructor(private readonly UserRepository: IUserRepository) {}

  async createUser(data: ICreateUserRequestDTO) {
    const user = await this.UserRepository.save(data);

    return user;
  }

  async findUserByPk(id: number) {
    const user = await this.UserRepository.findByPk(id);

    return user;
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
