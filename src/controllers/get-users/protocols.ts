import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IgetUsersController {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface IgetUsersRepository {
  getUsers(): Promise<User[]>;
}
