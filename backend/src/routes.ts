import { Router } from "express";

import { routes as routesOrder } from "./router/Order";
import { routes as routerUser } from "./router/User";
import { routes as routerDeliveryMan } from "./router/DeliveryMan";
import { routes as routerAuth } from "./router/auth";

import sequelize from "./models/db";

(async () => {
  // await sequelize.sync({ force: true });
})();

const routes = Router();

routes.use("/users", routerUser);
routes.use("/orders", routesOrder);
routes.use("/deliverys", routerDeliveryMan);
routes.use("/auth", routerAuth);

export default routes;
