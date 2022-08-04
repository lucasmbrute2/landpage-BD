import { ICreateUserDTO } from "../dto/userDTO";
import { User } from "../entity/User";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
  user: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const user = Object.assign(new User(), data)
    this.user.push(user)

    return user
  }

  async list(): Promise<User[]> {
    return this.user;
  }

  async findByEmail(email: string): Promise<User | Falsy> {
    return this.user.find(user => user.email === email);
  }

}