import { User } from '../../models/user';
import { badRequest, internalServerError, ok } from '../helpers';
import { HttpRequest, HttpResponse, Icontroller } from '../protocols';
import { IDeleteUserRepository } from './protocols';

export class DeleteUserController implements Icontroller {
    constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

    async handle(
        httpRequest: HttpRequest<unknown>
    ): Promise<HttpResponse<User | string>> {
        try {
            const id = httpRequest?.params?.id;
            if (!id) {
                return badRequest('Missing user id');
            }

            const user = await this.deleteUserRepository.deleteUser(id);
            return ok<User>(user);
        } catch (error) {
            return internalServerError();
        }
    }
}
