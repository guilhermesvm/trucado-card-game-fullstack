import express from 'express';
import { UserController } from '../controllers/userController';
import authentication from '../middleware/authentication';

const userController = new UserController();
const router = express.Router();

router.get('/users', authentication.hasAuthentication, userController.getAll);
router.get('/user/:id', authentication.hasAuthentication, userController.getById);
router.post('/user', authentication.hasAuthentication, userController.create);
router.put('/user/:id', authentication.hasAuthentication, userController.update);
router.delete('/user/:id', authentication.hasAuthentication, userController.delete);

export default router;
