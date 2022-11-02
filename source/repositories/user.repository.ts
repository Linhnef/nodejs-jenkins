import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { createToken, TokenData } from '../middleware/token.middleware';
import { errors } from '../constants/error.constant';

export interface ILoginPayload {
    email: string;
    password: string;
}

export interface IUserPayload {
    username: string;
    email: string;
    password: string;
}

export const login = async (data: ILoginPayload): Promise<TokenData | null> => {
    const authenticationRepository = await getRepository(User);
    const user = await authenticationRepository.findOne({ email: data.email });
    if (!user) return null;
    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) return null;
    return createToken(data.email);
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const userRepository = getRepository(User);
    const existUser = await userRepository.find({ email: payload.email });
    if (existUser) {
        throw new Error(errors.DUPLICATE_EMAIL);
    }
    const existUserName = await userRepository.find({ username: payload.username });
    if (existUserName) {
        throw new Error(errors.DUPLICATE_USERNAME);
    }
    const user = new User();
    return userRepository.save({
        ...user,
        ...payload
    });
};

export const getUser = async (email: string): Promise<User | null> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ email: email });
    if (!user) return null;
    return user;
};

export const initial = async () => {
    return 'Server working !'
};