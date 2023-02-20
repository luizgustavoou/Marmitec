import { Request, Response } from "express";

import { OrderService } from "./order.service";

export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const { proteinas, acompanhamentos, ...restOrder } = req.body;

      const orderRequest = { ...proteinas, ...acompanhamentos, ...restOrder };

      const order = await this.orderService.createOrder(orderRequest);

      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error save orders",
      });
    }
  }

  public async findMany(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await this.orderService.findOrders();

      console.log(orders);
      
      return res.json(orders);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error find orders",
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
        message: err.message || "Unexpected error update orders by status",
      });
    }
  }
}
