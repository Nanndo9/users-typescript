import { IgetUsersRepository } from '../../controllers/get-users/protocols';
import { User } from '../../models/user';

export class MongoGetUsersRepository implements IgetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [
            {
                fistName: 'Nanndo',
                lastName: 'Silva',
                email: 'nanndo@gmail.com',
                password: '123',
            },
        ];
    }
}
