import jwt_decode from "jwt-decode";

export class JWTService {
    decode<T = any>(token: string): T {
        return jwt_decode(token);
    }
}