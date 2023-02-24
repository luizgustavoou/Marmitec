import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {}

  async save(req: Request, res: Response): Promise<Response> {
    try {
      await this.userService.createUser(req.body);
      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error creating user.",
      });
    }
  }

  async findMany(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.findUsers();
      
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || "Unexpected error finding users.",
      });
    }
  }
}

// export default new UserController();
