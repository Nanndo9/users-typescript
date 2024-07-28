/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../../models/user';
import { badRequest, internalServerError, ok } from '../helpers';
import { HttpRequest, HttpResponse, Icontroller } from '../protocols';
import { IUpdateUserRepository, UpdateUserParams } from './protocols';

export class UpdateUserController implements Icontroller {
    constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
    async handle(
        httpRequest: HttpRequest<UpdateUserParams>
    ): Promise<HttpResponse<User | string>> {
        try {
            const id = httpRequest?.params?.id;
            const body = httpRequest.body;
            if (!id) {
                return badRequest('Missing fields');
            }
            const allowFieldsToUpdate: (keyof UpdateUserParams)[] = [
                'firstName',
                'lastName',
                'password',
            ];
            const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
                (key) =>
                    !allowFieldsToUpdate.includes(key as keyof UpdateUserParams)
            );

            if (someFieldIsNotAllowedToUpdate) {
                return badRequest('Some received field is not allowed');
            }
            const user = await this.updateUserRepository.updateUser(id, body);
            return ok<User>(user)
        } catch (error) {
            return internalServerError();
        }
    }
}
