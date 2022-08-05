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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dontenvEntries_1 = __importDefault(require("../../../configs/dontenvEntries"));
const User_1 = require("../../../modules/user/entity/User");
const migrations_1 = require("./migrations");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: dontenvEntries_1.default.database.url,
    entities: [User_1.User],
    migrations: migrations_1.migrations,
    logging: true,
    synchronize: true,
    subscribers: []
});
function createConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.AppDataSource.initialize();
            console.log("DB Connnected");
        }
        catch (error) {
            console.log(`Fail to connect DB - Error: ${error}`);
        }
    });
}
exports.createConnection = createConnection;
