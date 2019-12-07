import express from 'express';
import bodyParser from 'body-parser';
import env from './config/env';
import setupDatabase from './config/database';
const app = express();

setupDatabase();
app.use(bodyParser.json());

app.listen(env.port, () => console.log("Server is running on Port: " + env.port));
