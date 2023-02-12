import { Request, Response } from "express";
import Deliveryman from "../models/Deliveryman";

class DeliverymanController {
  public async index(req: Request, res: Response): Promise<Response> {
    const deliverymen = await Deliveryman.findAll();

    return res.json(deliverymen);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const deliveryman = await Deliveryman.create(req.body);

    // deliveryman.update({firstName: "cudoido"})

    return res.json(deliveryman);
  }

  public async update(req: Request, res: Response) {
    const deliveryman = await Deliveryman.update(
      { firstName: req.body.firstName },
      {
        where: {
          id: req.params.id,
        },
        individualHooks: true, //padrao eh false. se colocar true o hook after|beforeUpdate será acionado. No entanto, é melhor usar o after|BulkUpdate como hook.
      }
    );

    res.send();
  }
}

export default new DeliverymanController();
