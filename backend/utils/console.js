import repl from 'repl';
import pjson from '../package.json';
import setupDatabase from '../config/database';
import * as models from '../models';
setupDatabase();

const replServer = repl.start({
  prompt: `${pjson.name}> `
});
Object.keys(models).forEach(modelName => {
  replServer.context[modelName] = models[modelName];
});
