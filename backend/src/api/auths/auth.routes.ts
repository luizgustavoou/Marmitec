import { Router } from "express";

import { authController } from ".";
import { authMiddleware } from "../../middleware/auth.middleware";

const routes = Router();

routes.post("/signup", (req, res) => {
  return authController.signup(req, res);
});

routes.get("/login", (req, res) => {
  return authController.login(req, res);
});

// routes.get("/users", authMiddleware, AuthController.getUsers);

//Utilizei uma tipagem própria para o TS não reclamar que não existe req.auth. No entanto o papel dos middleware é esse, modificar a requisição e resposta
// routes.get("/me", authMiddleware, (req, res) => {
//   // res.send(req.auth);
// });

export { routes };
