import { Router } from "express";

import DeliveryManController from "../controllers/DeliveryManController";

const routes = Router();

routes.get("/", DeliveryManController.index);
routes.post("/", DeliveryManController.store);
routes.put("/:id", DeliveryManController.update);
export { routes };
