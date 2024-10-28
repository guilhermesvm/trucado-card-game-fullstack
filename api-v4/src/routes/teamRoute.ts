import express from "express";
import { TeamController } from "../controllers/teamController";
import authentication from "../middleware/authentication";

const teamController = new TeamController();
const router = express.Router();

router.get("/teams", authentication.hasAuthentication, teamController.getAll);
router.get("/team/:id", authentication.hasAuthentication, teamController.getById);
router.post("/team", authentication.hasAuthentication, teamController.create);
router.put("/team/:id", authentication.hasAuthentication, teamController.update);
router.delete("/team/:id", authentication.hasAuthentication, teamController.delete);

export default router;