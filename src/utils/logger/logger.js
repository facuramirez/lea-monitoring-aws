import { logger } from './winston.js';

export const defaultLogger = (msg, type) => {
  logger[type](msg);
};
