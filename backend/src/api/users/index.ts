import { MysqlUserRepository } from "./repositories/implements/MysqlUserRepository";
import { UserController } from "./user.controllers";
import { UserService } from "./user.service";

const mysqlUserRepository = new MysqlUserRepository();

const userService = new UserService(mysqlUserRepository);

const userController = new UserController(userService);

export { userService, userController };
