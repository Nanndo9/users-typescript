import { User } from '../../models/user';
import { HttpRequest, HttpResponse } from '../protocols';

export interface IgetUsersController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User[]>>;
}

export interface IgetUsersRepository {
    getUsers(): Promise<User[]>;
}
