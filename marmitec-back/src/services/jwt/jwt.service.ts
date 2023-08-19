import jwt from "jsonwebtoken";

export enum TIME {
  HOURS_24 = 86400,
  MINUTES_30 = 1800,
  MINUTES_1 = 60
};

export class JWTService {
  constructor(private readonly secret: string) { }

  async sign(payload: any) {
    return jwt.sign(payload, this.secret, { expiresIn: TIME.MINUTES_30 });
  }

  async verify(token: string) {
    return jwt.verify(token, this.secret);
  }
}
