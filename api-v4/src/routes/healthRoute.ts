import express from 'express';
import { HealthController } from '../controllers/healthController';

const healthController = new HealthController();
const router = express.Router();

router.get("/healthcheck", healthController.healthCheck);

export default router;
