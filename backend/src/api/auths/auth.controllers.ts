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
      const result = await User.findOne({
        where: { email },
      });

      if (!result) throw new Error("Username not found.");

      const user = result.toJSON<IUser>();

      const checkPassword = await bcrypt.compareSync(password, user.password);

      if (!checkPassword) throw new Error("Error validating password.");

      const token = sign({ user: user?.id });

      res.json({ user, token });
    } catch (err) {
      res.status(401).json({
        message: err.message || "Unexpected error login.",
      });
    }
  }

  public async signup(req: Request, res: Response) {
    try {
      const { email, password, firstName, lastName, adress, phone } = req.body;

      const saltRounds = 10;

      const passwordHash = await bcrypt.hashSync(password, saltRounds);

      const result = await User.create({
        email,
        password: passwordHash,
        firstName,
        lastName,
        adress,
        phone,
      });

      const user = result.toJSON<IUser>();

      delete user.password;

      const token = sign({ user: user.id });

      res.json({ token, user });
    } catch (err) {
      res.status(400).json({
        message: err.message || "Unexpected error signup user.",
      });
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();

      res.json(users);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new AuthController();
