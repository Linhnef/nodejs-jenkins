"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var dotenv = __importStar(require("dotenv"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var routers_1 = __importDefault(require("./routers"));
var socket_io_1 = require("socket.io");
var call_getway_1 = require("./getway/call.getway");
var peer_1 = require("peer");
var NAMESPACE = "server";
var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT ? parseInt(process.env.PORT) : 8000;
var app = (0, express_1.default)();
var httpServer = http_1.default.createServer(app).listen(port, host, function () {
    console.log("Server listen on port ".concat(port, " !!!"));
});
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.static("public"));
dotenv.config({ path: ".env" });
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
(0, call_getway_1.initSocketCall)(io);
var peerServer = (0, peer_1.ExpressPeerServer)(httpServer, {
    port: 443,
});
app.use("/peerjs", peerServer);
app.use(routers_1.default);
(0, call_getway_1.createPeerServerListeners)(peerServer);
