import express, { Response, Request } from 'express';
import { config } from 'dotenv';
import { GetUsersController } from './controllers/get-users/get-users';
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users';
import { MongoClient } from './database/mongo';
import { MongoCreateUserRepository } from './repositories/create-user/mongo-create-user';
import { CreateUserController } from './controllers/create-user/create-user';

const main = async () => {
    const app = express();
    app.use(express.json());
    config();
    await MongoClient.connect();
    app.get('/users', async (req: Request, res: Response) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();

        const getUsersController = new GetUsersController(
            mongoGetUsersRepository
        );

        const { body, statusCode } = await getUsersController.handle();
        res.send(body).status(statusCode);
    });

    app.post('/users', async (req: Request, res: Response) => {
        const mongoCreateUserRepository = new MongoCreateUserRepository();
        const createUserController = new CreateUserController(
            mongoCreateUserRepository
        );

        const { body, statusCode } = await createUserController.handle({
            body: req.body,
        });

        res.status(statusCode).send(body);
    });

    const port = process.env.PORT;
    app.listen(port, () => console.log(`listening on port ${port}`));
};
main();
