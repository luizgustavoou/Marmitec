import { Router } from "express";
import { deliverymanController } from "./index";

const routes = Router();

routes.get("/", (req, res) => {
  return deliverymanController.findMany(req, res);
});

routes.post("/", (req, res) => {
  return deliverymanController.save(req, res);
});

routes.put("/:id", (req, res) => {
  return deliverymanController.update(req, res);
});

export { routes };
