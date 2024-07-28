import { User } from '../../models/user';


export interface createUserParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ICreateUserRepostirory {
    createUser(params: createUserParams): Promise<User>;
}
