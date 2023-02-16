import Model from "sequelize/types/model";

export interface IUser {
  id: number;
  createdAt: number;
  updatedAt: number;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  adress?: string;
  phone?: string;
}
export interface UserModel extends Model, IUser {}
