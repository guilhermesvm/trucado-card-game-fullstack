import express from 'express';
import { TournamentController } from '../controllers/tournamentController';
import authentication from '../middleware/authentication';

const tournamentController = new TournamentController();
const router = express.Router();

router.get('/tournaments', authentication.hasAuthentication, tournamentController.getAll);
router.get('/tournament/:id', authentication.hasAuthentication, tournamentController.getById);
router.post('/tournament', authentication.hasAuthentication, tournamentController.create);
router.put('/tournament/:id', authentication.hasAuthentication, tournamentController.update);
router.delete('/tournament/:id', authentication.hasAuthentication, tournamentController.delete);

export default router;
