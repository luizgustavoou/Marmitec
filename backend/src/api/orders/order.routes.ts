import { Router } from "express";
import OrderController from "./order.controllers";

const routes = Router();

routes.get("/", OrderController.index);

routes.post("/", OrderController.store);

routes.put("/status/:id", OrderController.updateStatus);

export { routes };
