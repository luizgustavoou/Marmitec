import { Request, Response } from "express";
import { DeliverymanService } from "./deliveryman.service";

export class DeliverymanController {
  constructor(private readonly deliverymanService: DeliverymanService) {}

  public async save(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, adress, phone } = req.body;

    try {
      const deliveryman = await this.deliverymanService.createDeliveryman({
        firstName,
        lastName,
        adress,
        phone,
      });

      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error create deliveryman.",
      });
    }
  }

  public async findMany(req: Request, res: Response): Promise<Response> {
    try {
      const deliverymen = await this.deliverymanService.findDeliverymen();

      res.json(deliverymen);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error find deliverymen.",
      });
    }
  }

  public async update(req: Request, res: Response) {
    const id = req.params.id;
    const { firstName } = req.body;

    try {
      const deliveryman = await this.deliverymanService.updateDeliveryman({
        id,
        firstName,
      });

      res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error update deliveryman.",
      });
    }
  }
}
