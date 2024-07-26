import { IgetUsersRepository } from '../../controllers/get-users/protocols';
import { MongoClient } from '../../database/mongo';
import { User } from '../../models/user';

export class MongoGetUsersRepository implements IgetUsersRepository {
    async getUsers(): Promise<User[]> {
        const users = await MongoClient.db
            .collection<User>(' users')
            .find({})
            .toArray();

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
