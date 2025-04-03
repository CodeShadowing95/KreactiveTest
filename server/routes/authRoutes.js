import express from 'express';
import { login, secured } from '../controllers/authController.js';
import { tokenMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('login', login);
router.get('/protected', tokenMiddleware, secured);

export default router;