import express from 'express';
import { welcome, loginUser } from '../control/userController.js';


const router = express.Router();


// Ruta principal
router.get('/', welcome);
router.post('/login', loginUser); //  Esta es la ruta que usa el formulario



export default router;