import { CarModelDTO, ColorModelDTO } from "../../dtos/carmodel-response.dto";
import { CarModel, ColorModel } from "../../models/carmodel";

export class CarModelMapper{
    static toModel(dto: CarModelDTO) : CarModel{
        return {
            code: dto.code,
            description: dto.description,
            colors: dto.colors.map(colorDto => this.toColorModel(colorDto)),
        }
    }

    private static toColorModel(dto: ColorModelDTO) : ColorModel{
        return {
            code: dto.code,
            description: dto.description,
            price: dto.price,
        }
    }
}