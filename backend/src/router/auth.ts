import { Router } from "express";

import AuthController from "../controllers/AuthController";

import User from "../models/User";
import { sign } from "../services/auth";
import { authMiddleware } from "../utils/middlewares";
import { Req } from "../interfaces/utils";
const routes = Router();

routes.post("/signup", AuthController.signup);

routes.get("/login", AuthController.login);

routes.get("/users", authMiddleware, AuthController.getUsers);

//Utilizei uma tipagem própria para o TS não reclamar que não existe req.auth. No entanto o papel dos middleware é esse, modificar a requisição e resposta
routes.get("/me", authMiddleware, (req: Req, res) => {
  res.send(req.auth);
});

export { routes };
