import express from 'express';

import { login, protectedRoute } from '../controllers/users.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/login', login);
router.get('/protected', authMiddleware, protectedRoute);

export default router;