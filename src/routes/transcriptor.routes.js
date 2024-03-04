import { Router } from 'express';
import { transcriptorController } from '../controllers/transcriptor.controller.js';
import { loggerMiddleware } from '../utils/logger/logger.middleware.js';
import { logger } from '../utils/logger/winston.js';

class TranscriptorRoutes {
  router;
  constructor() {
    this.router = Router();
  }

  loadRoutes() {
    // GENERAL QUERYS
    this.router.post('/transcriptor/search', transcriptorController.search, loggerMiddleware);
    this.router.post('/transcriptor/bulk', transcriptorController.bulk, loggerMiddleware);
    // ===============

    // this.router.post('/transcriptor/createIndex', transcriptorController.createIndex);
    // this.router.get('/transcriptor', transcriptorController.getAllDocuments);
    // this.router.get('/transcriptor/info', transcriptorController.getIndexInfo);
    // this.router.post('/transcriptor', transcriptorController.createDocument);
    // this.router.delete('/transcriptor', transcriptorController.deleteIndex);

    return this.router;
  }
}

export const transcriptorRoutes = new TranscriptorRoutes();
