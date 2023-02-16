import { DeliverymanModel } from "../../../../interfaces/Deliveryman";
import Deliveryman from "../../deliveryman.model";
import { ICreateDeliveryManDTO } from "../../dtos/CreateDeliveryManDTO";
import { IUpdateDeliverymanDTO } from "../../dtos/UpdateDeliverymanDTO";
import { IDeliverymanRepository } from "../IDeliverymanRepository";

export class MysqlDeliverymanRepository implements IDeliverymanRepository {
  async save(createDeliveryManDTO: ICreateDeliveryManDTO): Promise<void> {
    const deliveryman = await Deliveryman.create({ ...createDeliveryManDTO });
  }

  async findMany(): Promise<DeliverymanModel[]> {
    const deliverymen = await Deliveryman.findAll();

    return deliverymen;
  }

  async update(updateDeliverymanDTO: IUpdateDeliverymanDTO): Promise<void> {
    const deliveryman = await Deliveryman.update(
      {
        firstName: updateDeliverymanDTO.firstName,
      },
      {
        where: {
          id: updateDeliverymanDTO.id,
        },
        individualHooks: true, //padrao eh false. se colocar true o hook after|beforeUpdate será acionado. No entanto, é melhor usar o after|BulkUpdate como hook.
      }
    );
  }
}
