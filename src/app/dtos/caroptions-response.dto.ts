export type CarOptionsResponseDTO = {
    configs: CarOptionsDTO[];
    towHitch: boolean;
    yoke: boolean;
}

export type CarOptionsDTO = {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}


