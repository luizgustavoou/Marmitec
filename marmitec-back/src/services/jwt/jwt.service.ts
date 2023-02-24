import jwt from "jsonwebtoken";

export class JWTService {
  constructor(private readonly secret: string) {}
  
  async sign(payload: any) {
    return jwt.sign(payload, this.secret, { expiresIn: 86400 });
  }

  async verify(token: string) {
    return jwt.verify(token, this.secret);
  }
}
