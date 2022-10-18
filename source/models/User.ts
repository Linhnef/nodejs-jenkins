import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, nullable: false })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    bio: string;

    @Column({ nullable: true })
    address: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ nullable: true })
    accountSetting: string;

    @OneToMany(() => Room, (room) => room.id)
    rooms: Room[];

    @OneToMany(() => User, (User) => User.id)
    friends: User[];
}