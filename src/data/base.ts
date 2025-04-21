export interface TrigValue {
    angle: number;
    sin: number;
    cos: number;
    tan: number;
}

export const trigonometricValues: TrigValue[] = [
    { angle: 0, sin: 0, cos: 1, tan: 0 },
    { angle: 30, sin: 0.5, cos: 0.866, tan: 0.577 },
    { angle: 45, sin: 0.707, cos: 0.707, tan: 1 },
    { angle: 60, sin: 0.866, cos: 0.5, tan: 1.732 },
    { angle: 90, sin: 1, cos: 0, tan: Infinity },
    { angle: 120, sin: 0.866, cos: -0.5, tan: -1.732 },
    { angle: 135, sin: 0.707, cos: -0.707, tan: -1 },
    { angle: 150, sin: 0.5, cos: -0.866, tan: -0.577 },
    { angle: 180, sin: 0, cos: -1, tan: 0 },
];

// Función auxiliar para obtener valores
export function getValuesByAngle(angle: number): TrigValue | undefined {
    return trigonometricValues.find(value => value.angle === angle);
}