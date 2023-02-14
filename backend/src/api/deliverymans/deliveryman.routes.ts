import { Router } from "express";

import DeliveryManController from "./deliveryman.controllers";

const routes = Router();

routes.get("/", DeliveryManController.index);
routes.post("/", DeliveryManController.store);
routes.put("/:id", DeliveryManController.update);
export { routes };
