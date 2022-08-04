import { Repository } from "typeorm";
import { AppDataSource } from "../../../../shared/infra/database/data-source";
import { ICreateUserDTO } from "../../dto/userDTO";
import { User } from "../../entity/User";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create(data)

    return await this.repository.save(user)

  }

  async list(): Promise<User[]> {
    return await this.repository.find()
  }

  async findByEmail(email: string): Promise<User | Falsy> {
    return await this.repository.findOneBy({ email })
  }

}