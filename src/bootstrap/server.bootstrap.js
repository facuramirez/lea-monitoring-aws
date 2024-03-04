import { json, urlencoded } from 'express';
import cors from 'cors';
import { configEnvs } from '../configs/config.env.js';
import { healthRoutes } from '../routes/health.routes.js';
import { transcriptorRoutes } from '../routes/transcriptor.routes.js';
import { logger } from '../utils/logger/winston.js';
import HTTP_STATUS from 'http-status-codes';
import compression from 'compression';

export class TranscriptorServer {
  constructor(app) {
    this.app = app;
  }

  start() {
    this.#loadMiddlewares(this.app);
    this.#loadRoutes(this.app);
    this.#handleErrors(this.app);
    this.#startServer(this.app);
  }

  #loadMiddlewares(app) {
    app.use(compression());
    /* Configuraciones globales: "cors" y parseo del body */
    app.use(cors());
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
  }

  #loadRoutes(app) {
    /* Todas las rutas llevan el prefijo "/api" */
    app.use('/api', healthRoutes.loadRoutes());
    app.use('/api', transcriptorRoutes.loadRoutes());
  }

  #handleErrors(app) {
    /* Rutas no encontradas */
    app.all('*', (req, res) => {
      logger.error(`[${req.method}] [${req.originalUrl}] Not found`);
      res.status(HTTP_STATUS.NOT_FOUND).json({ message: `${req.originalUrl} Not found` });
    });

    /* Rutas encontradas pero donde se lanzaron excepciones */
    app.use((error, req, res, next) => {
      logger.warn(`Error in [${req.method}] [${req.originalUrl}]`);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error });
    });
  }

  #startServer(app) {
    /* Inicialización del servidor */
    app.listen(configEnvs.PORT, () => {
      logger.info(`Server is running on port ${configEnvs.PORT}`);
    });
  }
}
