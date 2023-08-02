import { Router } from "express";
import { userController } from "./index";
import { authMiddleware } from "../../middleware";

const routes = Router();

routes.get("/", authMiddleware.checkAuth.bind(authMiddleware), (req, res) => {
  return userController.findMany(req, res);
});
routes.post("/", (req, res) => {
  return userController.save(req, res);
});

export { routes };
