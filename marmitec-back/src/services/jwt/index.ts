import { JWTService } from "./jwt.service";

const secret =
  "3A14D22CB3E05589F6A068A2A83CD92293BD9D8475E597E0CE85008B24871ED3";

const jwtService = new JWTService(secret);

export { jwtService };
