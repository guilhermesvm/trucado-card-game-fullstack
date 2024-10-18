import express from 'express';
import { UserController } from '../controllers/userController';

const userController = new UserController();
const router = express.Router();

router.get('/users', userController.getAll);
router.get('/user/:id', userController.getById);
router.post('/user', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

export default router;
