import jwt_decode from "jwt-decode";

export class JWTService {
    decode(token: string) {
        return jwt_decode(token);
    }
}