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
const AppError_1 = require("../../../../shared/errors/AppError");
const UserRepositoryInMemory_1 = require("../../localRepository/UserRepositoryInMemory");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
let createUserUseCase;
let userRepositoryInMemory;
describe("Create a user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory_1.UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepositoryInMemory);
    });
    it("should be able to create a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const car = yield createUserUseCase.execute({
            name: "Name test",
            email: "Email test",
            birthday: "Date",
            phone: "3191234-1234"
        });
        expect(car).toHaveProperty("id");
    }));
    it("should not be able to create a user with an existing email", () => {
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield createUserUseCase.execute({
                name: "Name test",
                email: "Email test",
                birthday: "Date",
                phone: "3191234-1234"
            });
            yield createUserUseCase.execute({
                name: "Name test",
                email: "Email test",
                birthday: "Date",
                phone: "3191234-1234"
            });
        })).rejects.toBeInstanceOf(AppError_1.AppError);
    });
});
