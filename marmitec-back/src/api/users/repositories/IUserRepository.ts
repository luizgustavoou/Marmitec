import { ICreateUserRequestDTO } from "../dtos/ICreateUserRequestDTO";
import { IUser } from "../types/model";

//TODO: Acho que na função findMany não devia ser Promise<UserModel[]>, mas Promise<any[]>. Estudar depois isso.
export interface IUserRepository {
  save(CreateUserDTO: ICreateUserRequestDTO): Promise<IUser>;
  findMany(): Promise<IUser[]>;
  findOneByEmail(email: string): Promise<IUser>;
  findByPk(id: number): Promise<IUser>;
}
