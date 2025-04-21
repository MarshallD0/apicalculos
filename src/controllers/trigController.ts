import { Request, Response } from 'express';
import { getValuesByAngle, TrigValue } from '../data/base';

interface TrigResponse {
    angle: number;
    result: string;
}

export class TrigController {
    // Obtener seno de un ángulo
    public getSine = (req: Request, res: Response) => {
        const angle = Number(req.params.angle);
        const value = getValuesByAngle(angle);

        if (!value) {
            return res.status(404).json({ error: 'Ángulo no encontrado en la base de datos' });
        }

        return res.json({ angle, sine: value.sin });
    };

    // Obtener coseno de un ángulo
    public getCosine = (req: Request, res: Response) => {
        const angle = Number(req.params.angle);
        const value = getValuesByAngle(angle);

        if (!value) {
            return res.status(404).json({ error: 'Ángulo no encontrado en la base de datos' });
        }

        return res.json({ angle, cosine: value.cos });
    };

    // Obtener tangente de un ángulo
    public getTangent = (req: Request, res: Response) => {
        const angle = Number(req.params.angle);
        const value = getValuesByAngle(angle);

        if (!value) {
            return res.status(404).json({ error: 'Ángulo no encontrado en la base de datos' });
        }

        return res.json({ angle, tangent: value.tan });
    };

    // Obtener todos los valores trigonométricos de un ángulo
    public getAllValues = (req: Request, res: Response) => {
        const angle = Number(req.params.angle);
        const value = getValuesByAngle(angle);

        if (!value) {
            return res.status(404).json({ error: 'Ángulo no encontrado en la base de datos' });
        }

        return res.json(value);
    };

    // Obtener todos los valores trigonométricos y evaluarlos
    async getTrigValues(angle: number): Promise<TrigResponse> {
        try {
            const value: TrigValue | undefined = getValuesByAngle(angle);

            if (!value) {
                throw new Error('Ángulo no encontrado en la base de datos');
            }

            return this.evaluateTrigValues(value);
        } catch (error) {
            throw new Error('Error obteniendo valores trigonométricos');
        }
    }

    // Evaluar los valores trigonométricos
    private evaluateTrigValues(value: TrigValue): TrigResponse {
        const { angle, sin, cos, tan } = value;

        if (sin === 1) {
            return { angle, result: 'El seno es máximo en este ángulo' };
        }

        if (cos === 1) {
            return { angle, result: 'El coseno es máximo en este ángulo' };
        }

        if (tan === Infinity) {
            return { angle, result: 'La tangente es indefinida en este ángulo' };
        }

        return { angle, result: 'Valores trigonométricos calculados correctamente' };
    }
}

export default TrigController;