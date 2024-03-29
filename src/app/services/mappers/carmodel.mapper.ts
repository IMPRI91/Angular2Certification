/**********************************************************************
Name: carmodel.mapper.ts
Copyright © 2024 

Purpose:
This responsable to Map the response from /model to our class.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024      Mapper Class.		
***********************************************************************/
import { CarModelDTO } from "../../dtos/carmodel-response.dto";
import { CarModel } from "../../models/carmodel";

export class CarModelMapper {
  static toModel(dto: CarModelDTO): CarModel {
    return {
      code: dto.code,
      description: dto.description,
      colors: dto.colors,
    };
  }
}
