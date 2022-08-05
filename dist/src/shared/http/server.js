"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const dontenvEntries_1 = __importDefault(require("../../configs/dontenvEntries"));
const data_source_1 = require("../infra/database/data-source");
require("../infra/container");
const user_routes_1 = require("./routes/user.routes");
const AppError_1 = require("../errors/AppError");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(user_routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});
(0, data_source_1.createConnection)();
app.listen(dontenvEntries_1.default.server.port, () => {
    console.log(`Server is running`);
});
