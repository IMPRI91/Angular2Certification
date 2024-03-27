export type CarOptionsDTO = {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}

export type CarOptionsResponseDTO = {
    options: CarOptionsDTO[];
    towHitch: boolean;
    yoke: boolean;
}

