import express from "express";
import { deleteCampeonatos, getCampeonatos, getCampeonatosId, postCampeonatos, putCampeonatos } from "../controllers/campeonatoController.js";

const router = express.Router();

router.get("/api/campeonatos", getCampeonatos);
router.get("/api/campeonatos/:id", getCampeonatosId);
router.post("/api/campeonatos", postCampeonatos);
router.put("/api/campeonatos/:id", putCampeonatos);
router.delete("/api/campeonatos/:id", deleteCampeonatos);


export default router;