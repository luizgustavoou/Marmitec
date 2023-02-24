import { Router } from "express";
import { orderController } from ".";

const routes = Router();

routes.get("/", (req, res) => {
  return orderController.findMany(req, res);
});

routes.post("/", (req, res) => {
  return orderController.save(req, res);
});

routes.put("/status/:id", (req, res) => {
  return orderController.updateByStatus(req, res);
});

export { routes };
