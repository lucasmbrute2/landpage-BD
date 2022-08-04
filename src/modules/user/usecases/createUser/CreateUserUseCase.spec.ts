import { AppError } from "../../../../shared/errors/AppError";
import { UserRepositoryInMemory } from "../../localRepository/UserRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create a user", () => {

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  })

  it("should be able to create a user", async () => {
    const car = await createUserUseCase.execute({
      name: "Name test",
      email: "Email test",
      birthday: new Date(2000, 28, 5),
      phone: "3191234-1234"
    })
    expect(car).toHaveProperty("id");

  })

  it("should not be able to create a user with an existing email", () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: "Name test",
        email: "Email test",
        birthday: new Date(2000, 28, 5),
        phone: "3191234-1234"
      })

      await createUserUseCase.execute({
        name: "Name test",
        email: "Email test",
        birthday: new Date(2000, 28, 5),
        phone: "3191234-1234"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

})