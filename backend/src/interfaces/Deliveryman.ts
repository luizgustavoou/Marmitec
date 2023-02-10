import Model from "sequelize/types/model";

export interface TDeliveryman {
  id: number;
  createdAt: number;
  updatedAt: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
}
export interface DeliverymanModel extends Model, TDeliveryman {}
