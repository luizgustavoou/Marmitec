import { ICreateDeliveryManDTO } from "../dtos/CreateDeliveryManDTO";
import { IUpdateDeliverymanDTO } from "../dtos/UpdateDeliverymanDTO";
import { IDeliveryman } from "../types/model";

export interface IDeliverymanRepository {
  save(createDeliveryManDTO: ICreateDeliveryManDTO): Promise<void>;
  findMany(): Promise<IDeliveryman[]>;
  update(updateDeliverymanDTO: IUpdateDeliverymanDTO): Promise<void>;
}
