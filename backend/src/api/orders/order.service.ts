import { ICreateOrderDTO } from "./dtos/ICreateOrderDTO";
import { IUpdateOrderByStatusDTO } from "./dtos/IUpdateOrderByStatusDTO";
import { IOrderRepository } from "./repositories/IOrderRepository";

export class OrderService {
  constructor(private readonly OrderRepository: IOrderRepository) {}

  async createOrder(CreateOrderDTO: ICreateOrderDTO) {
    await this.OrderRepository.save(CreateOrderDTO);
  }

  async findOrders() {
    const orders = this.OrderRepository.findMany();

    return orders;
  }

  async updateOrderByStatus(UpdateOrderByStatusDTO: IUpdateOrderByStatusDTO) {
    const order = await this.OrderRepository.updateStatus(
      UpdateOrderByStatusDTO
    );
  }
}
