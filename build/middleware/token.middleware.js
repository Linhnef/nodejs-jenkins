"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.createToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = process.env.SECRET_KEY;
var createToken = function (email) {
    var expiresIn = 60 * 60;
    return {
        expiresIn: expiresIn,
        token: jsonwebtoken_1.default.sign({ name: email }, secret || "SECRET", {
            expiresIn: 60 * 60,
        }),
    };
};
exports.createToken = createToken;
var authenticateToken = function (req, res, next) {
    var authHeader = req.headers["authorization"];
    var token = authHeader && authHeader.split(" ")[1];
    if (token == null)
        return res.status(401).json("Authentication error !!");
    jsonwebtoken_1.default.verify(token, (secret || "SECRET"), function (err, user) {
        console.log(err);
        if (err)
            return res.status(403).json("Authentication error !!");
        next();
    });
};
exports.authenticateToken = authenticateToken;
