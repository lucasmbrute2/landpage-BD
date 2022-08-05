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
exports.UserRepositoryInMemory = void 0;
const User_1 = require("../entity/User");
class UserRepositoryInMemory {
    constructor() {
        this.user = [];
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = Object.assign(new User_1.User(), data);
            this.user.push(user);
            return user;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.user.find(user => user.email === email);
        });
    }
}
exports.UserRepositoryInMemory = UserRepositoryInMemory;
