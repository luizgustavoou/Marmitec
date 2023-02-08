import { NextFunction, Response } from "express";
import { Req } from "../interfaces/utils";
import { verify } from "../services/auth";
import User from "../models/User";

export const authMiddleware = async (
  req: Req,
  res: Response,
  next: NextFunction
) => {
  const [hashType, token] = (req.headers.authorization as string).split(" ");

  try {
    const payload = await verify(token);

    const user = await User.findByPk(
      (payload as { user: number; [key: string]: any }).user,
      {
        attributes: {
          exclude: ["username", "password"],
        },
      }
    );

    if (!user) return res.sendStatus(401);

    req.auth = user;

    next();
  } catch (error) {
    res.sendStatus(401);
  }
};
