import { Router } from "express";
import { userController } from "./index";

const routes = Router();

routes.get("/", (req, res) => {
  return userController.findMany(req, res);
});
routes.post("/", (req, res) => {
  return userController.save(req, res);
});

export { routes };
