import { User } from '../../models/user';
import { internalServerError, ok } from '../helpers';
import { HttpResponse, Icontroller } from '../protocols';
import {IgetUsersRepository } from './protocols';

export class GetUsersController implements Icontroller {
    constructor(private readonly getUsersRepository: IgetUsersRepository) {
        this.getUsersRepository = getUsersRepository;
    }
    async handle():Promise<HttpResponse<User[]|string>>{
        try {
            const users = await this.getUsersRepository.getUsers();

            return ok<User[]>(users)
        } catch (error) {
            return internalServerError();
        }
    }
}
