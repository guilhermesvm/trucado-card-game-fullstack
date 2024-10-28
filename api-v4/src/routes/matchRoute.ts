import express from 'express';
import { MatchController } from '../controllers/matchController';
import authentication from '../middleware/authentication';

const matchController = new MatchController();
const router = express.Router();

router.get("/matches", authentication.hasAuthentication, matchController.getAll);
router.get("/match/:id", authentication.hasAuthentication, matchController.getById);
router.post("/match", authentication.hasAuthentication, matchController.create);
router.put("/match/:id", authentication.hasAuthentication, matchController.update);
router.delete("/match/:id", authentication.hasAuthentication, matchController.delete);

export default router;
