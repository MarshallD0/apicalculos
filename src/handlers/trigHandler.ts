import { Request, Response } from 'express';
import TrigController from '../controllers/trigController';

const trigController = new TrigController();

export class TrigHttpHandler {
    async getTrigValues(req: Request, res: Response) {
        try {
            const angle = Number(req.params.angle);
            const trigValues = await trigController.getTrigValues(angle);
            res.status(200).json(trigValues);
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener los valores trigonométricos',
            });
        }
    }
}