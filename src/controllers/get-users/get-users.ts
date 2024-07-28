import { Icontroller } from '../protocols';
import {IgetUsersRepository } from './protocols';

export class GetUsersController implements Icontroller {
    constructor(private readonly getUsersRepository: IgetUsersRepository) {
        this.getUsersRepository = getUsersRepository;
    }
    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();

            return {
                statusCode: 200,
                body: users,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something want wrong.',
            };
        }
    }
}
