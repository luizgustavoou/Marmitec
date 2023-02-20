import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../users/user.model";

import { sign } from "./auth.service";
import { IUser } from "../users/types/model";

class AuthController {
  public async login(req: Request, res: Response) {
    const [hashType, hash] = (req.headers.authorization as string).split(" ");

    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    try {
      const user = await User.findOne({
        where: { email, password },
        attributes: { exclude: ["password"] },
      });

      if (!user) return res.sendStatus(401);

      const token = sign({ user: user?.id });

      res.send({ user, token });
    } catch (error) {
      res.send(error);
    }
  }

  public async signup(req: Request, res: Response) {
    try {
      const result = await User.create(req.body);

      const { password, ...user } = result.toJSON<IUser>();

      const token = sign({ user: user.id });

      res.send({ token, user });
    } catch (error) {
      res.sendStatus(400);
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();

      res.send(users);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new AuthController();
