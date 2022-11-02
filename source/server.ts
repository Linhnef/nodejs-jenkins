import http from 'http';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import logging from './configs/logging';
import config from './configs/configs';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import router from './routers';
import { createConnection } from 'typeorm';
import { databaseConfig } from './configs/database';
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { createPeerServerListeners, initSocketCall } from './getway/call.getway';
import { ExpressPeerServer } from 'peer';

const NAMESPACE = 'server';
const host = process.env.HOST || '0.0.0.0';
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const app = express();
const httpServer = http.createServer(app).listen(port, host, () => {
    console.log(`Server listen on port ${port} !!!`);
});

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
dotenv.config({ path: '.env' });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json'
        }
    })
);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
initSocketCall(io);
const peerServer = ExpressPeerServer(httpServer, {
    port: 443
});
app.use("/peerjs", peerServer);
app.use(router);
createPeerServerListeners(peerServer);


