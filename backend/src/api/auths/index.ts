import { AuthService } from "./auth.service";

import { userService } from "../users";
import { cryptService } from "../../services/crypt";
import { jwtService } from "../../services/jwt";
import { AuthController } from "./auth.controllers";

const authService = new AuthService(userService, cryptService, jwtService);

const authController = new AuthController(authService);

export { authService, authController };
