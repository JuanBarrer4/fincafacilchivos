import express from 'express';
import { welcome, loginUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', welcome);
router.post('/login', loginUser);

export default router;
