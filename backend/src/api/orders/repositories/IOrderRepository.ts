import { ICreateOrderDTO } from "../dtos/ICreateOrderDTO";
import { IUpdateOrderByStatusDTO } from "../dtos/IUpdateOrderByStatusDTO";
import { IOrder } from "../types/model";

export interface IOrderRepository {
  save(CreateOrderDTO: ICreateOrderDTO): Promise<void>;
  findMany(): Promise<IOrder[]>;
  updateStatus(UpdateOrderByStatusDTO: IUpdateOrderByStatusDTO): Promise<void>;
}
