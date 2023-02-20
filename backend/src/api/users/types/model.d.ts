import Model from "sequelize/types/model";

export interface IUser {
  id: number;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  adress?: string;
  phone?: string;
  createdAt: number;
  updatedAt: number;
}
export interface UserModel extends Model, IUser {}
