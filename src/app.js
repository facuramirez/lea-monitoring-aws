import express from 'express';
import { TranscriptorServer } from './bootstrap/server.bootstrap.js';
import { configEnvs } from './configs/config.env.js';
import { defaultLogger } from './utils/logger/logger.js';

class App {
  constructor() {}

  initialize() {
    /* Si no se completa correctamente el archivo ".env" NO se inicializa el servidor */
    if (!this.#loadConfig())
      return defaultLogger('Please complete the environment variables and restart the server', 'error');

    const app = express();
    const server = new TranscriptorServer(app);
    server.start();
  }

  #loadConfig() {
    return configEnvs.validateConfig();
  }
}

export const application = new App();
