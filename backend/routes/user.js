import express from 'express';
import {
    getUserById,
    getUserWithToken,
    login,
    signup,
} from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/getUser/:username', getUserById);
router.get('/getUser', verifyToken, getUserWithToken);
router.post('/signup', signup);
router.post('/login', login);

export default router;
