import { OrderController } from "./order.controllers";
import { OrderService } from "./order.service";
import { MysqlOrderRepository } from "./repositories/implements/MysqlOrderRepository";

const mysqlOrderRepository = new MysqlOrderRepository();

const orderService = new OrderService(mysqlOrderRepository);

const orderController = new OrderController(orderService);

export { orderService, orderController };
