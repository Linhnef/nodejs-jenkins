"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
var SERVER_PORT = process.env.SERVERPORT || 5000;
var SERVER_HOSTNAME = process.env.HOSTNAME || "Localhost";
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};
var config = {
    server: SERVER,
};
exports.default = config;
