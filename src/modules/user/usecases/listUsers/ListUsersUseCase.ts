import { inject, injectable } from "tsyringe";
import { User } from "../../entity/User";
import { IUserRepository } from "../../interfaces/IUserRepository";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(): Promise<User[]> {
    return this.userRepository.list();
  }
}