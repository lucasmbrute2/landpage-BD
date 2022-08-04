import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dto/userDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";

@injectable()
export class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateUserDTO) {
    const userAlreadyCreated = await this.userRepository.findByEmail(data.email);

    if (userAlreadyCreated) throw new AppError("This email is already registered");

    return await this.userRepository.create(data);
  }
}