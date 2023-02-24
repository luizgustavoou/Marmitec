import { NextFunction, Request, Response } from "express";

import { verify } from "../api/auths/auth.service";
import User from "../api/users/user.model";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  const [hashType, token] = authHeader && authHeader.split(" ");

  try {
    const payload = await verify(token);

    const user = await User.findByPk(
      (payload as { user: number; [key: string]: any }).user,
      {
        attributes: {
          exclude: ["password"],
        },
      }
    );

    if (!user) return res.sendStatus(401);

    // req.auth = user;

    next();
  } catch (error) {
    res.sendStatus(401);
  }
};