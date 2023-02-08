import { Request, Response } from "express";
import Order from "../models/Order";
import { OrderRequest } from "../interfaces/Order";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await Order.findAll();
      return res.json(users);
    } catch (error) {
      res.sendStatus(400);
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { proteinas, acompanhamentos, ...restOrder }: OrderRequest =
        req.body;

      const order = { ...proteinas, ...acompanhamentos, ...restOrder };

      console.log(order);
      const user = await Order.create(order);

      

      return res.json(user);
    } catch (error) {
      console.log(error);

      res.sendStatus(400);
    }
  }
}

export default new UserController();
