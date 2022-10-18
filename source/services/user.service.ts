import { TokenData } from "../middleware/token.middleware";
import { User } from "../models/User";
import { createUser, getUser, ILoginPayload, IUserPayload, login } from "../repositories/user.repository";


export const onLogin = async (data: ILoginPayload): Promise<TokenData | null> => {
    return await login(data)
};


export const onCreateUser = async (payload: IUserPayload): Promise<User> => {
    return await createUser(payload)
}

export const onGetUserByEmail = async (email: string): Promise<User | null> => {
    return await getUser(email)
};