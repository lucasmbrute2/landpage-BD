"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UserRepository_1 = require("../../../modules/user/infra/repository/UserRepository");
tsyringe_1.container.registerSingleton("UserRepository", UserRepository_1.UserRepository);
