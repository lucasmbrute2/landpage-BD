"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepositoryInMemory_1 = require("../../localRepository/UserRepositoryInMemory");
const CreateUserUseCase_1 = require("../createUser/CreateUserUseCase");
const ListUsersUseCase_1 = require("./ListUsersUseCase");
let listUsersUseCase;
let createUserUseCase;
let usersRepositoryInMemory;
describe("List all users", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UserRepositoryInMemory_1.UserRepositoryInMemory();
        listUsersUseCase = new ListUsersUseCase_1.ListUsersUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepositoryInMemory);
    });
    it("should be able to list all users", () => __awaiter(void 0, void 0, void 0, function* () {
        yield createUserUseCase.execute({
            name: "Name test",
            email: "Email test",
            birthday: "Date",
            phone: "3191234-1234"
        });
        yield createUserUseCase.execute({
            name: "Name test",
            email: "Email test2",
            birthday: "Date",
            phone: "3191234-1234"
        });
        yield createUserUseCase.execute({
            name: "Name test",
            email: "Email test3",
            birthday: "Date",
            phone: "3191234-1234"
        });
        const users = yield listUsersUseCase.execute();
        expect(users.length >= 1 && users.every(user => user.id)).toBe(true);
    }));
});
