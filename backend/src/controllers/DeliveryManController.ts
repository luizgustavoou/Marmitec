import { Request, Response } from "express";
import Deliveryman from "../models/Deliveryman";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await Deliveryman.findAll();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await Deliveryman.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
