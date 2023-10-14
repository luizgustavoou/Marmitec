import { JWTService } from "./jwt.service";

const secret = process.env.SECRET_JWT || "";

const jwtService = new JWTService(secret);

export { jwtService };
