import { Model } from "sequelize";

export interface IOrder {
  id: number;
  description?: string;
  fraMilanesa?: number;
  fraAssado?: number;
  figaAce?: number;
  bisSuiAce?: number;
  fraMolho?: number;
  arrozRefo?: number;
  arrozLeite?: number;
  macarrao?: number;
  legSalte?: number;
  salaCrua?: number;
  macaCozida?: number;
  feijao?: number;
  status: number;
  canceled: number;
  createdAt: number;
  updatedAt: number;
  UserId?: number;
  DeliverymanId?: number;
}

export interface OrderModel extends Model, IOrder {}
