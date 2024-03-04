import dotenv from 'dotenv';
import { defaultLogger } from '../utils/logger/logger.js';
import * as url from 'url';
dotenv.config();

class ConfigEnv {
  constructor() {
    this.PORT = process.env.PORT;
    // this.NODE = process.env.NODE;
    // this.APIKEY = process.env.API_KEY;
    // this.CURRENTINDEX;
  }

  validateConfig() {
    let ok = true;
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        defaultLogger(`The key ${key} is undefined`, 'warn');
        ok = false;
      }
    }
    return ok;
  }
}

export const configEnvs = new ConfigEnv();
