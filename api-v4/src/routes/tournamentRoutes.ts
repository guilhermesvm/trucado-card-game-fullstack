import express from 'express';
import { TournamentController } from '../controllers/tournamentController';

const tournamentController = new TournamentController();
const router = express.Router();

router.get('/tournaments', tournamentController.getAll);
router.get('/tournament/:id', tournamentController.getById);
router.post('/tournament', tournamentController.create);
router.put('/tournament/:id', tournamentController.update);
router.delete('/tournament/:id', tournamentController.delete);

export default router;
