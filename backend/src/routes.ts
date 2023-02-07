import { Router } from "express";

import UserController from "./controllers/UserController";
import DeliveryManController from "./controllers/DeliveryManController";

import { routes as routesOrder } from "./router/Order";
import { routes as routerUser } from "./router/User";
import { routes as routerDeliveryMan } from "./router/User";

import sequelize from "./models/db";

(async () => {
  await sequelize.sync({ force: true });
})();

const routes = Router();

routes.use("/users", routerUser);
routes.use("/orders", routesOrder);
routes.use("/deliverys", routerDeliveryMan);

export default routes;
