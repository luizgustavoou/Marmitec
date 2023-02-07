import { Request, Response } from "express";
import Order from "../models/Order";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await Order.findAll();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await Order.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
