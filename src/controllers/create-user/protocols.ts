import { User } from '../../models/user';
import { HttpRequest, HttpResponse } from '../protocols';

export interface ICreateUserController {
    handle(
        httpRequest: HttpRequest<createUserParams>
    ): Promise<HttpResponse<User>>;
}

export interface createUserParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ICreateUserRepostirory {
    createUser(params: createUserParams): Promise<User>;
}
