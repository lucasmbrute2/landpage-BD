import { User } from "../../entity/User";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class ListUsersUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  async execute(): Promise<User[]> {
    return this.userRepository.list();
  }
}