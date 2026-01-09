import authController from '../controllers/auth.controller'
import {Router} from "express";
import { verifySession } from '../middlewares/authMiddleware';

const router = Router();

router.post('/signIn', authController.signIn);
router.post('/signUp', authController.signUp);
router.post('/logOut', authController.logOut);
router.get('/profile', verifySession, authController.getProfile);

export default router