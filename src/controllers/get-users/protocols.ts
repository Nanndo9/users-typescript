import { User } from '../../models/user';


export interface IgetUsersRepository {
    getUsers(): Promise<User[]>;
}
