import { Request, Response } from "express";
import User from "../models/User";
import { sign } from "../services/auth";

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
      //   {
      //     "username": "luiz",
      //     "password": "123",
      //     "firstName": "Luiz",
      //     "lastName": "Umbelino",
      //     "adress": "Rua Aeroporto de Navegantes - 249",
      //     "phone": "84 999999999"
      //   }

      const result = await User.create(req.body);

      const { password, ...user } = result.toJSON<User>();

      const token = sign({ user: user.id });

      res.send({ token, user });

      //id: 1
      //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJpYXQiOjE2NzU4OTk5MDUsImV4cCI6MTY3NTk4NjMwNX0.kxxDBbhunpLpNGn4ERlsiVYPlxKepBmq73Ig6gJ-ONU
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
