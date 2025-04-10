import express from 'express';
import { loginUser } from '../control/userController.js';

const router = express.Router();

router.post('/login', loginUser);

export default router;
