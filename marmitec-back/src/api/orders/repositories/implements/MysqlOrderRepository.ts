import Deliveryman from "../../../deliverymans/deliveryman.model";
import User from "../../../users/user.model";
import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO";
import { IUpdateOrderByStatusDTO } from "../../dtos/IUpdateOrderByStatusDTO";
import Order from "../../order.model";
import { IOrder } from "../../types/model";
import { IOrderRepository } from "../IOrderRepository";

export class MysqlOrderRepository implements IOrderRepository {
  async save(CreateOrderDTO: ICreateOrderDTO): Promise<void> {
    await Order.create({ ...CreateOrderDTO });
  }

  async findMany(): Promise<IOrder[]> {
    const orders = await Order.findAll({
      raw: true,
      attributes: {
        exclude: ["UserId", "DeliverymanId"],
      },
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName", "adress", "phone"],
        },
        {
          model: Deliveryman,
          attributes: ["id", "firstName", "lastName", "phone"],
        },
      ],
    });

    return orders;
  }

  async updateStatus(
    UpdateOrderByStatusDTO: IUpdateOrderByStatusDTO
  ): Promise<void> {
    const order = await Order.update(
      {
        status: UpdateOrderByStatusDTO.newStatus,
      },
      {
        where: {
          id: UpdateOrderByStatusDTO.id,
        },
        individualHooks: true,
      }
    );
  }
}
