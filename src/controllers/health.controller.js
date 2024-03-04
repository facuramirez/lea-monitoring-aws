import { Router } from 'express';

class HealthController {
  constructor() {
    this.router = Router();
  }

  loadRoutes() {
    this.router.get('/info', (_req, res) => res.json({ msg: 'All is OK!' }));

    return this.router;
  }
}

export const healthController = new HealthController();
