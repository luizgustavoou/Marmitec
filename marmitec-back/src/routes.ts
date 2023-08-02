import { Router } from "express";

import { routes as routesOrder } from "./api/orders/order.routes";
import { routes as routerUser } from "./api/users/user.routes";
import { routes as routerDeliveryMan } from "./api/deliverymans/deliveryman.routes";
import { routes as routerAuth } from "./api/auths/auth.routes";
import { authMiddleware } from "./middleware";

const routes = Router();

routes.use("/users", routerUser);
routes.use("/orders", routesOrder);
routes.use("/deliverys", routerDeliveryMan);
routes.use("/auth", routerAuth);

routes.get("/docker", (req, res) => {
  res.send("Hello Docker!");
});

routes.get('/me', authMiddleware.checkAuth.bind(authMiddleware), (req, res) => {
  res.json({auth: (req as any).auth})
})

export default routes;
