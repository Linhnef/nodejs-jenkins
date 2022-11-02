import { getRepository } from "typeorm";
import { PeerClient } from "../models/PeerClient";
import { Room } from "../models/Room";

export type INewUser = {
  userName: string;
  socketId: string;
};

export const createPeerClient = async (
  payload: INewUser
): Promise<PeerClient> => {
  const peerRepository = getRepository(PeerClient);
  const user = new PeerClient();
  const newPeer = await peerRepository.save({
    ...user,
    ...payload,
  });
  return newPeer;
};

export const getAllPeerClient = async (): Promise<PeerClient[]> => {
  const peerRepository = getRepository(PeerClient);
  const allClients = await peerRepository.find({});
  return allClients;
};

export const getAllRoom = async (): Promise<Room[]> => {
  const roomRepository = getRepository(Room);
  const allRoom = await roomRepository.find({});
  return allRoom;
};
