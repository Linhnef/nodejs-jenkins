import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { User } from "../models/User";
import { IUserPayload, ILoginPayload } from "../repositories/user.repository";
import { TokenData } from "../middleware/token.middleware";
import {
  onCreateUser,
  onGetUserByEmail,
  onInitial,
  onLogin,
} from "../services/user.service";

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async initial() {
    return await onInitial();
  }
}
