import express from 'express';
import { postPartidas } from '../controllers/partidaController';

const router = express.Router();

router.post('/partidas', postPartidas);

export default router;