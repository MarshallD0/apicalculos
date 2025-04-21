import { Request, Response } from 'express';
import TrigController from '../controllers/trigController';

const trigController = new TrigController();

export class TrigHttpHandler {
    // Obtener razones trigonométricas
    async getTrigValues(req: Request, res: Response) {
        try {
            const angle = Number(req.params.angle);
            const trigValues = await trigController.getTrigValues(req, res);
            res.status(200).json(trigValues);
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener los valores trigonométricos',
            });
        }
    }

    // Calcular el área de un triángulo
    async calculateTriangleArea(req: Request, res: Response) {
        try {
            const area = await trigController.calculateTriangleArea(req, res);
            res.status(200).json(area);
        } catch (error) {
            res.status(500).json({
                message: 'Error al calcular el área del triángulo',
            });
        }
    }

    // Calcular la hipotenusa de un triángulo rectángulo
    async calculateHypotenuse(req: Request, res: Response) {
        try {
            const hypotenuse = await trigController.calculateHypotenuse(req, res);
            res.status(200).json(hypotenuse);
        } catch (error) {
            res.status(500).json({
                message: 'Error al calcular la hipotenusa del triángulo',
            });
        }
    }

    // Calcular todos los valores para los datos de la base
    async calculateAllData(req: Request, res: Response) {
        try {
            const results = await trigController.calculateAllData(req, res);
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({
                message: 'Error al calcular todos los datos',
            });
        }
    }
}