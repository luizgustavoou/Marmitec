import { JWTService } from "./jwt.service";

const secret = process.env.SECRET_JWT || "";

console.log({ secret })

const jwtService = new JWTService(secret);

export { jwtService };
