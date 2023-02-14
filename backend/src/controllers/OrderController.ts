import { Request, Response } from "express";
import Order from "../models/Order";
import { OrderRequest } from "../interfaces/Order";
import User from "../models/User";
import Deliveryman from "../models/Deliveryman";

class OrderController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await Order.findAll({
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
      return res.json(orders);
    } catch (error) {
      res.sendStatus(400);
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { proteinas, acompanhamentos, ...restOrder }: OrderRequest =
        req.body;

      const order = { ...proteinas, ...acompanhamentos, ...restOrder };

      const user = await Order.create(order, {});

      return res.json(user);
    } catch (error) {
      console.log(error);

      res.sendStatus(400);
    }
  }

  public async updateStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { newStatus } = req.body;

      const order = await Order.update(
        { status: newStatus },
        {
          where: {
            id,
          },
          individualHooks: true,
        }
      );

      return res.send(order);
    } catch (error) {
      console.log(error);

      res.sendStatus(400);
    }
  }
}

export default new OrderController();
