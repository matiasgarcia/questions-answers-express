import mongoose from 'mongoose';
import * as models from "../models";

const clearDatabase = () => {
  for (let i in mongoose.connection.collections) {
    mongoose.connection.collections[i].remove(() => {});
  }
};

const setupConnection = async (mongoUri) => {
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) {
      throw err;
    }
    console.log("MongoDB database connection established successfully")
  });
};

beforeEach(async (done) => {
  if (mongoose.connection.readyState === 0) {
    await setupConnection(process.env.MONGO_URL);
    return done();
  } else {
    clearDatabase();
    return done();
  }
});

afterEach(async (done) => {
  await mongoose.disconnect();
  return done();
});

afterAll(done => {
  return done();
});
