import { MailtrapMAilProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgressUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMAilProvider();

const postgressUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
