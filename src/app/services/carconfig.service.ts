/**********************************************************************
Name: carconfig.service.ts
Copyright © 2024 

Purpose:
This service will retrieve the information from /model and map it returning
a Observable<CarModel[]>.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024      Service Class.		
***********************************************************************/
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { CarModel } from "../models/carmodel";
import { CarModelDTO } from "../dtos/carmodel-response.dto";
import { CarModelMapper } from "./mappers/carmodel.mapper";

@Injectable()
export class CarConfigService {
  constructor(private readonly http: HttpClient) {}

  getCarsModels(): Observable<CarModel[]> {
    return this.http
      .get<CarModelDTO[]>("/models")
      .pipe(
        map((carModelResponseDto: CarModelDTO[]) =>
          carModelResponseDto.map(CarModelMapper.toModel)
        )
      );
  }
}
