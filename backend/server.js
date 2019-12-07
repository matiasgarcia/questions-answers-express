import express from 'express';
import bodyParser from 'body-parser';
import env from './config/env';
import setupDatabase from './config/database';
import { setupQuestionsRoutes } from './routes/questions';
const app = express();

setupDatabase();
app.use(bodyParser.json());
setupQuestionsRoutes({ app });

app.listen(env.port, () => console.log("Server is running on Port: " + env.port));
