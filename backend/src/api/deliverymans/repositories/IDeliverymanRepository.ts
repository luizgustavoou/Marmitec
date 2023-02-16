import { DeliverymanModel } from "../../../interfaces/Deliveryman";
import { ICreateDeliveryManDTO } from "../dtos/CreateDeliveryManDTO";
import { IUpdateDeliverymanDTO } from "../dtos/UpdateDeliverymanDTO";

export interface IDeliverymanRepository {
  save(createDeliveryManDTO: ICreateDeliveryManDTO): Promise<void>;
  findMany(): Promise<DeliverymanModel[]>;
  update(updateDeliverymanDTO: IUpdateDeliverymanDTO): Promise<void>;
}
