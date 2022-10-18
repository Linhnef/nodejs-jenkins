import { Room } from "../models/Room";
import { createPeerClient, getAllPeerClient, getAllRoom, INewUser } from "../repositories/getway.repository";


export const onCreatePeerClient = async (payload: INewUser): Promise<INewUser> => {
    return await createPeerClient(payload);
};

export const onGetAllPeerClient = async (): Promise<INewUser[]> => {
    return await getAllPeerClient();
};

export const onGetAllRoom = async (): Promise<Room[]> => {
    return await getAllRoom();
}