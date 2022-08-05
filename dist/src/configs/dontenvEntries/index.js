"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    server: {
        port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3131
    },
    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
};
