import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/getUser/:username', userController.getUserById);
router.post('/signup', userController.signup);
router.post('/login', userController.login);

export default router;
