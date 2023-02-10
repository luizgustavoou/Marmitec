import { Request, Response } from "express";
import Deliveryman from "../models/Deliveryman";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const deliverymen = await Deliveryman.findAll();

    return res.json(deliverymen);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const deliveryman = await Deliveryman.create(req.body);

    
    return res.json(deliveryman);
  }
}

export default new UserController();
