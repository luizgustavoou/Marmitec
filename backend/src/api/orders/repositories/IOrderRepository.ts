import { OrderModel } from "../../../interfaces/Order";
import { ICreateOrderDTO } from "../dtos/ICreateOrderDTO";
import { IUpdateOrderByStatusDTO } from "../dtos/IUpdateOrderByStatusDTO";

export interface IOrderRepository {
  save(CreateOrderDTO: ICreateOrderDTO): Promise<void>;
  findMany(): Promise<OrderModel[]>;
  updateStatus(UpdateOrderByStatusDTO: IUpdateOrderByStatusDTO): Promise<void>;
}
