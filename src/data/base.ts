export interface Triangle {
    base: number;
    height: number;
}

export interface Sides {
    sideA: number;
    sideB: number;
}

export const triangles: Triangle[] = [
    { base: 10, height: 5 },
    { base: 7, height: 3 },
    { base: 15, height: 8 },
];

export const sides: Sides[] = [
    { sideA: 3, sideB: 4 },
    { sideA: 5, sideB: 12 },
    { sideA: 8, sideB: 15 },
];