import validator from 'validator';

import { User } from '../../models/user';
import { HttpRequest, HttpResponse, Icontroller } from '../protocols';
import { createUserParams, ICreateUserRepostirory } from './protocols';
import { badRequest, created, internalServerError } from '../helpers';

export class CreateUserController implements Icontroller {
    constructor(
        private readonly createUserRepository: ICreateUserRepostirory
    ) {}
    async handle(
        httpRequest: HttpRequest<createUserParams>
    ): Promise<HttpResponse<User | string>> {
        try {
            const requiredFields = [
                'firstName',
                'lastName',
                'email',
                'password',
            ];
            for (const field of requiredFields) {
                if (
                    !httpRequest?.body?.[field as keyof createUserParams]
                        ?.length
                ) {
                    return badRequest(`Field ${field} is required`);
                }
            }
            const emailIsValide = validator.isEmail(httpRequest.body!.email);
            if (!emailIsValide) {
                return badRequest('E-mail is invalid');
            }

            const user = await this.createUserRepository.createUser(
                httpRequest.body!
            );

            return created<User>(user);
        } catch (error) {
            return internalServerError();
        }
    }
}
