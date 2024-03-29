/**********************************************************************
Name: caroptions.mapper.ts
Copyright © 2024 

Purpose:
This responsable to Map the response from /options/$id to our class.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024      Mapper Class.		
***********************************************************************/
import { CarOptionsResponseDTO } from "../../dtos/caroptions-response.dto";
import { CarOptions } from "../../models/caroptions";

export class CarOptionsMapper {
  static toModel(dto: CarOptionsResponseDTO): CarOptions {
    return {
      configs: dto.configs,
      towHitch: dto.towHitch,
      yoke: dto.yoke,
    };
  }
}
