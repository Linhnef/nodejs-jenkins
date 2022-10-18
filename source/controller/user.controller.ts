import { Get, Route, Tags, Post, Body, Path } from 'tsoa';
import { User } from '../models/User';
import { IUserPayload, ILoginPayload } from '../repositories/user.repository';
import { TokenData } from '../middleware/token.middleware';
import { onCreateUser, onGetUserByEmail, onLogin } from '../services/user.service';

@Route('users')
@Tags('User')
export default class UserController {
    @Post('/login')
    public async login(@Body() body: ILoginPayload): Promise<TokenData | null> {
        return await onLogin(body);
    }

    @Post('/register')
    public async createUser(@Body() body: IUserPayload): Promise<User> {
        return await onCreateUser(body);
    }

    @Get('/:email')
    public async getUser(@Path() email: string): Promise<User | null> {
        return await onGetUserByEmail(email);
    }
}