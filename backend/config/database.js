import mongoose from 'mongoose';
import env from './env';

export default () => {
  const { connect, connection } = mongoose;
  connect(env.databaseUri, { useNewUrlParser: true });
  connection.once('open', () => console.log("MongoDB database connection established successfully"))
};
