import { CarModelDTO } from "../../dtos/carmodel-response.dto";
import { CarModel } from "../../models/carmodel";

export class CarModelMapper{
    static toModel(dto: CarModelDTO) : CarModel{
        console.log("DTO OUTPUT: ",dto);
        return {
            code: dto.code,
            description: dto.description,
            colors: dto.colors,
        }
    }
}