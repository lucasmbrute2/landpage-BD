import { UserRepositoryInMemory } from "../../localRepository/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ListUsersUseCase } from "./ListUsersUseCase"

let listUsersUseCase: ListUsersUseCase;
let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UserRepositoryInMemory;

describe("List all users", () => {

  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    listUsersUseCase = new ListUsersUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to list all users", async () => {

    await createUserUseCase.execute({
      name: "Name test",
      email: "Email test",
      birthday: "Date",
      phone: "3191234-1234"
    })
    await createUserUseCase.execute({
      name: "Name test",
      email: "Email test2",
      birthday: "Date",
      phone: "3191234-1234"
    })
    await createUserUseCase.execute({
      name: "Name test",
      email: "Email test3",
      birthday: "Date",
      phone: "3191234-1234"
    })

    const users = await listUsersUseCase.execute()
    expect(users.length >= 1 && users.every(user => user.id)).toBeTruthy()

  })
})