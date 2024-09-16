import express from 'express';
import { deleteUsuarios, getUsuarios, getUsuariosId, postUsuarios, putUsuarios } from "../controllers/usuarioController";

const router = express.Router();

router.post('/usuarios', postUsuarios);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuariosId);
router.put('/usuarios/:id', putUsuarios);
router.delete('/usuarios/:id', deleteUsuarios);

export default router;