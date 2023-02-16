import { ICreateDeliveryManDTO } from "./dtos/CreateDeliveryManDTO";
import { IUpdateDeliverymanDTO } from "./dtos/UpdateDeliverymanDTO";
import { IDeliverymanRepository } from "./repositories/IDeliverymanRepository";

export class DeliverymanService {
  constructor(private readonly DeliverymanRepository: IDeliverymanRepository) {}

  async createDeliveryman(data: ICreateDeliveryManDTO) {
    await this.DeliverymanRepository.save(data);
  }

  async findDeliverymen() {
    const deliverymen = await this.DeliverymanRepository.findMany();

    return deliverymen;
  }

  async updateDeliveryman(data: IUpdateDeliverymanDTO) {
    await this.DeliverymanRepository.update(data);
  }
}
