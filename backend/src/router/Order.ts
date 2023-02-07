import { Router } from "express";
import OrderController from "../controllers/OrderController";

const routes = Router();

routes.get("/", OrderController.index);
routes.post("/", OrderController.store);

export { routes };
