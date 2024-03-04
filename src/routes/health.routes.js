import { Router } from 'express';

class HealthRoutes {
  constructor() {
    this.router = Router();
  }

  loadRoutes() {
    this.router.get('/info', (_req, res) => res.status(200).json({ ok: true, msg: 'All is OK!' }));

    return this.router;
  }
}

export const healthRoutes = new HealthRoutes();
