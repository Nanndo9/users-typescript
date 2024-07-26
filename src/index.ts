import express, { Response, Request } from 'express';
import { config } from 'dotenv';
import { GetUsersController } from './controllers/get-users/get-users';
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users';
import { MongoClient } from './database/mongo';

const main = async () => {
    const app = express();

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
    const port = process.env.PORT;
    app.listen(port, () => console.log(`listening on port ${port}`));
};
main();
