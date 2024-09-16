import express from "express";
import { deleteUsuarioId, getUsuarioId, getUsuarios, postUsuarios, putUsuarioId } from "../controllers/usuarioController.js";

const router = express.Router(); //permite criarmos varias rotas, importa-las como se fossem um middleware / permite modularizar o sistema

// GET
router.get("/api/usuarios", getUsuarios);
router.get("/api/usuarios/:id", getUsuarioId);
router.post("/api/usuarios", postUsuarios);
router.put("/api/usuarios/:id", putUsuarioId);
router.delete("/api/usuarios/:id", deleteUsuarioId)

export default router;