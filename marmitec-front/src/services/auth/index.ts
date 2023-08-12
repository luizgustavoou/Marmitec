import { AuthService } from "./auth.service";
import { jwtService } from "../jwt";
import { cookiesService } from "../cookies";

const authService = new AuthService(jwtService, cookiesService);

export {
    authService
}