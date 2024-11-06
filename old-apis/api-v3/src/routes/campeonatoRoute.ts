import express from 'express';
import { postCampeonatos } from '../controllers/campeonatoController';

const router = express.Router();

router.post('/campeonatos', postCampeonatos);

export default router;