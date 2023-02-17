import { Request, Response } from "express";
import Order from "./order.model";
import { OrderRequest } from "../../interfaces/Order";
import User from "../users/user.model";
import Deliveryman from "../deliverymans/deliveryman.model";
import { OrderService } from "./order.service";

export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  public async save(req: Request, res: Response): Promise<Response> {
    console.log(req.body);
    try {
      const { proteinas, acompanhamentos, ...restOrder } = req.body;

      const order = { ...proteinas, ...acompanhamentos, ...restOrder };

      const user = await this.orderService.createOrder(order);

      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.messaage || "Unexpected error find orders",
      });
    }
  }

  public async findMany(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await this.orderService.findOrders();

      return res.json(orders);
    } catch (err) {
      return res.status(400).json({
        message: err.messaage || "Unexpected error find orders",
      });
    }
  }

  public async updateByStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { newStatus } = req.body;

      const order = await this.orderService.updateOrderByStatus({
        id,
        newStatus,
      });

      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.messaage || "Unexpected error update orders by status",
      });
    }
  }
}
