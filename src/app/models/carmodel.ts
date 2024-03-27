export type CarModel = {
    code: string;
    description: string;
    colors: ColorModel[];
}

export type ColorModel = {
    code: string;
    description: string;
    price: number;
}
