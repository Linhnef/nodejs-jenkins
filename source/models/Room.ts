/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    socketId: string;

    @Column({ unique: true, nullable: false })
    roomId: string;

    @Column({ unique: false, nullable: false })
    hostName: string;

    @Column({ unique: true, nullable: false })
    peerId: string;

    @Column({ nullable: true })
    config: string;

    @OneToMany(() => User, (user) => user.id)
    users: User[];

}