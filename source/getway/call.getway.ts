import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { actions } from "../constants/action.wss";
import { PeerClient } from "../models/PeerClient";
import { INewUser } from "../repositories/getway.repository";
import { onCreatePeerClient, onGetAllPeerClient, onGetAllRoom } from "../services/getway.service";


export const createPeerServerListeners = (peerServer: any) => {
    peerServer.on('connection', (client: any) => {
        console.log('succesfully connecter to peer js server');
        console.log(client.id);
    });
};

export const initSocketCall = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    io.on(actions.ONCONNECT, (socket: Socket) => {
        // new user join.
        socket.on(actions.NEWUSER, async (data: INewUser) => {
            await onCreatePeerClient(data);
            const allClients = onGetAllPeerClient();
            const rooms = await onGetAllRoom();
            io.sockets.emit('broadcast', {
                event: actions.NEWUSERCREATED,
                activeUsers: allClients
            });

            io.sockets.emit('broadcast', {
                event: actions.NEWUSERCREATED,
                allRooms: rooms
            });
        });
    })
}