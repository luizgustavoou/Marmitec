import { Request, Response } from "express";
import Order from "../models/Order";

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
      const user = await Order.create(req.body);
      return res.json(user);
    } catch (error) {
      res.sendStatus(400);
    }
  }
}

export default new UserController();
