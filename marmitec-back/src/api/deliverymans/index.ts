import { DeliverymanController } from "./deliveryman.controllers";
import { DeliverymanService } from "./deliveryman.service";
import { MysqlDeliverymanRepository } from "./repositories/implements/MysqlDeliverymanRepository";

const mysqlDeliverymanRepository = new MysqlDeliverymanRepository();

const deliverymanService = new DeliverymanService(mysqlDeliverymanRepository);

const deliverymanController = new DeliverymanController(deliverymanService);

export { deliverymanService, deliverymanController };
