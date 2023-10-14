import { NextFunction, Request, Response } from "express";

import { JWTService } from "../services/jwt/jwt.service";
import { UserService } from '../api/users/user.service';

//token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJpYXQiOjE2OTEwMTQ3MjAsImV4cCI6MTY5MTEwMTEyMH0.CNnOnRbF3xHuKDtTObqKaR5MqcVJTLMlCB5jS5nvpB4

export class AuthMiddleware {
  constructor(private readonly jwtService: JWTService, private readonly userService: UserService
  ) { }

  async checkAuth(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authHeader = req.headers.authorization || "";

    const [hashType, token] = authHeader && authHeader.split(" ");

    console.log({ hashType, token })
    try {

      const payload = await this.jwtService.verify(token);

      const user = await this.userService.findUserByPk((payload as { user: { [key: string]: any } }).user.id);

      if (!user) return res.sendStatus(401);

      (req as any).auth = user;

      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(401);
    }
  };


}
