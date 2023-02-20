import { ICreateUserRequestDTO } from "../../dtos/ICreateUserRequestDTO";
import { IUser } from "../../types/model";
import User from "../../user.model";
import { IUserRepository } from "../IUserRepository";

export class MysqlUserRepository implements IUserRepository {
  async save(CreateUserDTO: ICreateUserRequestDTO): Promise<void> {
    const user = await User.create({ ...CreateUserDTO });
  }

  async findMany(): Promise<IUser[]> {
    const users = User.findAll({ raw: true });

    return users;
  }

  async findOneByEmail(email: string): Promise<IUser> {
    const result = await User.findOne({
      where: { email },
    });

    const user = result.toJSON<IUser>();

    return user;
  }
}
