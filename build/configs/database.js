"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
var Room_1 = require("../models/Room");
var User_1 = require("../models/User");
exports.databaseConfig = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "05110511",
    database: process.env.POSTGRES_DB || "vite",
    entities: [User_1.User, Room_1.Room],
    synchronize: true,
};
