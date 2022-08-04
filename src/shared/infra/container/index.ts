import { container } from "tsyringe";
import { UserRepository } from "../../../modules/user/infra/repository/UserRepository";
import { IUserRepository } from "../../../modules/user/interfaces/IUserRepository";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)