import { Router } from "express";

import { routes as routesOrder } from "./api/orders/order.routes";
import { routes as routerUser } from "./api/users/user.routes";
import { routes as routerDeliveryMan } from "./api/deliverymans/deliveryman.routes";
import { routes as routerAuth } from "./api/auths/auth.routes";
import sequelize from "./config/db";
import { createUserController } from "./useCases/CreateUser";

(async () => {
  // await sequelize.sync({ force: true });
})();

const routes = Router();

routes.use("/users", routerUser);
routes.use("/orders", routesOrder);
routes.use("/deliverys", routerDeliveryMan);
routes.use("/auth", routerAuth);

//CODIGO AULA DE SOLID
routes.post("/users2", (request, response) => {
  return createUserController.handle(request, response);
});


export default routes;
