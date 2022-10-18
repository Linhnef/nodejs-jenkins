import { ConnectionOptions } from 'typeorm';
import { Room } from '../models/Room';
import { User } from '../models/User';

export const databaseConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || '05110511',
    database: process.env.POSTGRES_DB || 'vite',
    entities: [User, Room],
    synchronize: true,
};