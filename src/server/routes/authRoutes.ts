import authController from '../controllers/authController'
import {Router} from "express";

const router = Router();

router.post('/signIn', authController.signIn);
router.post('/signUp', authController.signUp);
router.post('/logout', authController.logout);

export default router