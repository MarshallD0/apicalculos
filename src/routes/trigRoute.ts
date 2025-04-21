import express from 'express';
import { TrigHttpHandler } from '../handlers/trigHandler';

const router = express.Router();
const trigHandler = new TrigHttpHandler();

// Ruta para obtener razones trigonométricas
router.get('/values/:angle', trigHandler.getTrigValues);

// Ruta para calcular el área de un triángulo
router.post('/triangle/area', trigHandler.calculateTriangleArea);

// Ruta para calcular la hipotenusa de un triángulo rectángulo
router.post('/triangle/hypotenuse', trigHandler.calculateHypotenuse);

// Ruta para calcular todos los valores
router.get('/all-data', trigHandler.calculateAllData);

export default router;