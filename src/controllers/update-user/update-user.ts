/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../../models/user';
import { HttpRequest, HttpResponse, Icontroller } from '../protocols';
import {
    IUpdateUserRepository,
    UpdateUserParams,
} from './protocols';

export class UpdateUserController implements Icontroller {
    constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
    async handle(httpRequest: HttpRequest<UpdateUserParams>): Promise<HttpResponse<User>> {
        try {
            const id = httpRequest?.params?.id;
            const body = httpRequest.body;
            if (!id) {
                return {
                    statusCode: 400,
                    body: 'Missing user id',
                };
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
                return {
                    statusCode: 400,
                    body: 'Some received field is not allowed',
                };
            }
            const user = await this.updateUserRepository.updateUser(id, body);
            return {
                statusCode: 200,
                body: user,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong',
            };
        }
    }
}
