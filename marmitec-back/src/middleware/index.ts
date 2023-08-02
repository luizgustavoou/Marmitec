
import { userService } from '../api/users';
import { jwtService } from '../services/jwt';
import { AuthMiddleware } from './auth.middleware';



const authMiddleware = new AuthMiddleware(jwtService, userService);

export { authMiddleware }