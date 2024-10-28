import express from 'express';
import { registerUser, verifyOTP } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyOTP);

export default router;
