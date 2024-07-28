import express  from 'express';
import { config } from 'dotenv';
import { MongoClient } from './database/mongo';
import router from './router/routers';

const main = async () => {
    const app = express();
    app.use(express.json());
    config();
    await MongoClient.connect();
    app.use(router);
    const port = process.env.PORT;
    app.listen(port, () => console.log(`listening on port ${port}`));
};
main();
