import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  public async login(req: Request, res: Response) {
    const [hashType, hash] = (req.headers.authorization as string).split(" ");

    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    try {
      const response = await this.authService.login(email, password);

      res.json(response);
    } catch (err) {
      console.log(err.message);

      res.status(401).json({
        message: err.message || "Unexpected error login.",
      });
    }
  }

  public async signup(req: Request, res: Response) {
    const { email, password, firstName, lastName, adress, phone } = req.body;
    try {
      const response = await this.authService.signup({
        email,
        password,
        firstName,
        lastName,
        adress,
        phone,
      });

      res.json(response);
    } catch (err) {
      res.status(400).json({
        message: err.message || "Unexpected error signup user.",
      });
    }
  }

  // public async getUsers(req: Request, res: Response) {
  //   try {
  //     const users = await User.findAll();

  //     res.json(users);
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }
}
