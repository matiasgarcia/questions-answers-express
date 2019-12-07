import { config } from 'dotenv';
config();

export default {
  port: process.env.PORT,
  databaseUri: process.env.DATABASE_URI,
};
