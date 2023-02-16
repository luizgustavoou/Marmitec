import { Router } from "express";

import AuthController from "./auth.controllers";
import { authMiddleware } from "../../middleware/auth.middleware";
import { Req } from "../../interfaces/utils";

const routes = Router();

routes.post("/signup", AuthController.signup);

routes.get("/login", AuthController.login);

routes.get("/users", authMiddleware, AuthController.getUsers);

//Utilizei uma tipagem própria para o TS não reclamar que não existe req.auth. No entanto o papel dos middleware é esse, modificar a requisição e resposta
routes.get("/me", authMiddleware, (req: Req, res) => {
  res.send(req.auth);
});

export { routes };
