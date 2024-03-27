export type CarModelDTO = {
    code: string;
    description: string;
    colors: ColorModelDTO[];
}

export type ColorModelDTO = {
    code: string;
    description: string;
    price: number;
}

export type CarModelResponseDTO = {
    models: CarModelDTO[];
}