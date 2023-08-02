import { ICreateUserRequestDTO } from "../../dtos/ICreateUserRequestDTO";
import { IUser } from "../../types/model";
import User from "../../user.model";
import { IUserRepository } from "../IUserRepository";

export class MysqlUserRepository implements IUserRepository {
  async save(CreateUserDTO: ICreateUserRequestDTO): Promise<IUser> {
    const result = await User.create({ ...CreateUserDTO });

    if (!result) throw new Error("Error create user.");

    const user = result.toJSON<IUser>();

    return user;
  }

  async findMany(): Promise<IUser[]> {
    const users = User.findAll({ raw: true });

    return users;
  }

  async findByPk(id: number): Promise<IUser> {
    const result = await User.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    })

    if (!result) throw new Error("Not found user by id.");

    const user = result.toJSON<IUser>();


    return user;
  }

  async findOneByEmail(email: string): Promise<IUser> {
    const result = await User.findOne({
      where: { email },
    });

    if (!result) throw new Error("Not found user by email.");

    const user = result.toJSON<IUser>();

    return user;
  }
}
