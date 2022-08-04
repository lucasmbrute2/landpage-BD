import { ICreateUserDTO } from "../dto/userDTO";
import { User } from "../entity/User";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>
  list(): Promise<User[]>
}