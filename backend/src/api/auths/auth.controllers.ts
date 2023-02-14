import { Request, Response } from "express";
import User from "../users/user.model";

import { sign } from "./auth.service";
import { TUser } from "../../interfaces/User";

class AuthController {
  public async login(req: Request, res: Response) {
    const [hashType, hash] = (req.headers.authorization as string).split(" ");

    const [username, password] = Buffer.from(hash, "base64")
      .toString()
      .split(":");

    try {
      const user = await User.findOne({
        where: { username, password },
        attributes: { exclude: ["username", "password"] },
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

      const { password, ...user } = result.toJSON<TUser>();

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
