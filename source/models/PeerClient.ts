/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class PeerClient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: false })
    socketId: string;

    @Column({ nullable: false })
    userName: string;

    @Column({ unique: true, nullable: false })
    @OneToOne(() => User, (user) => user.id)
    userId: string
}