import validator from 'validator';

import { User } from '../../models/user';
import { HttpRequest, HttpResponse, Icontroller } from '../protocols';
import {
    createUserParams,
    ICreateUserRepostirory,
} from './protocols';

export class CreateUserController implements Icontroller {
    constructor(
        private readonly createUserRepository: ICreateUserRepostirory
    ) {}
    async handle(
        httpRequest: HttpRequest<createUserParams>
    ): Promise<HttpResponse<User>> {
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
                    return {
                        statusCode: 400,
                        body: `Field ${field} is required`,
                    };
                }
            }
            const emailIsValide = validator.isEmail(httpRequest.body!.email);
            if (!emailIsValide) {
                return {
                    statusCode: 400,
                    body: 'E-mail is invalid',
                };
            }

            const user = await this.createUserRepository.createUser(
                httpRequest.body!
            );

            return {
                statusCode: 201,
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
