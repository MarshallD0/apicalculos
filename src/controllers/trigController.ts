import { Request, Response } from 'express';
import { triangles, sides } from '../data/base';

export class TrigController {
    // Calcular razones trigonométricas
    public getTrigValues = (req: Request, res: Response) => {
        const angle = Number(req.params.angle);
        const radians = this.toRadians(angle);

        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const tan = Math.tan(radians);

        let result = 'Valores trigonométricos calculados correctamente';
        if (sin === 1) {
            result = 'El seno es máximo en este ángulo';
        } else if (cos === 1) {
            result = 'El coseno es máximo en este ángulo';
        } else if (!isFinite(tan)) {
            result = 'La tangente es indefinida en este ángulo';
        }

        return res.json({ angle, sin, cos, tan, result });
    };

    // Calcular todas las áreas de los triángulos
    public calculateTriangleArea = (req: Request, res: Response) => {
        const areas = triangles.map(triangle => ({
            base: triangle.base,
            height: triangle.height,
            area: (triangle.base * triangle.height) / 2,
        }));

        return res.json(areas);
    };

    // Calcular todas las hipotenusas de los triángulos rectángulos
    public calculateHypotenuse = (req: Request, res: Response) => {
        const hypotenuses = sides.map(side => ({
            sideA: side.sideA,
            sideB: side.sideB,
            hypotenuse: Math.sqrt(side.sideA ** 2 + side.sideB ** 2),
        }));

        return res.json(hypotenuses);
    };

    // Calcular todos los valores trigonométricos para ángulos comunes
    public calculateAllTrigValues = (req: Request, res: Response) => {
        const angles = [0, 30, 45, 60, 90];
        const trigValues = angles.map(angle => {
            const radians = this.toRadians(angle);
            return {
                angle,
                sin: Math.sin(radians),
                cos: Math.cos(radians),
                tan: isFinite(Math.tan(radians)) ? Math.tan(radians) : 'undefined',
            };
        });

        return res.json(trigValues);
    };

    // Calcular todos los datos
    public calculateAllData = (req: Request, res: Response) => {
        const trianglesData = triangles.map(triangle => ({
            base: triangle.base,
            height: triangle.height,
            area: (triangle.base * triangle.height) / 2,
        }));

        const sidesData = sides.map(side => ({
            sideA: side.sideA,
            sideB: side.sideB,
            hypotenuse: Math.sqrt(side.sideA ** 2 + side.sideB ** 2),
        }));

        const angles = [0, 30, 45, 60, 90];
        const trigValues = angles.map(angle => {
            const radians = this.toRadians(angle);
            return {
                angle,
                sin: Math.sin(radians),
                cos: Math.cos(radians),
                tan: isFinite(Math.tan(radians)) ? Math.tan(radians) : 'undefined',
            };
        });

        const results = {
            triangles: trianglesData,
            sides: sidesData,
            trigonometry: trigValues,
        };

        return res.json(results);
    };

    // Convertir grados a radianes
    private toRadians(angle: number): number {
        return (angle * Math.PI) / 180;
    }
}

export default TrigController;