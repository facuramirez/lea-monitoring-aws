import { logger } from './winston.js';

export const loggerMiddleware = (req, _res, next) => {
  logger.info(`[${req.method}] [${req.originalUrl}]`);
};
