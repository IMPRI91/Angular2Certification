import { CarOptionsResponseDTO } from "../../dtos/caroptions-response.dto";
import { CarOptions } from "../../models/caroptions";


export class CarOptionsMapper{
    static toModel(dto: CarOptionsResponseDTO) : CarOptions{
        return {
            options: dto.options,
            towHitch: dto.towHitch,
            yoke: dto.yoke,
        }
    }
}