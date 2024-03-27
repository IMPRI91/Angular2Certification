export type Options = {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}

export type CarOptions = {
    options: Options[];
    towHitch: boolean;
    yoke: boolean;
}

