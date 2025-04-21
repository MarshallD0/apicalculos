import express from 'express';
import { TrigHttpHandler } from '../handlers/trigHandler';

const router = express.Router();
const trigHandler = new TrigHttpHandler();

// Ruta para obtener los valores trigonométricos
router.get('/values/:angle', trigHandler.getTrigValues);

export default router;