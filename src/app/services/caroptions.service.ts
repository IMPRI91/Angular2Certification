/**********************************************************************
Name: caroptions.service.ts
Copyright © 2024 

Purpose:
This service will retrieve the information from /options/$id and map it returning
a Observable<CarOptions>.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024      Service Class.		
***********************************************************************/
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { CarOptionsMapper } from "./mappers/caroptions.mapper";
import { CarOptionsResponseDTO } from "../dtos/caroptions-response.dto";
import { CarOptions } from "../models/caroptions";

@Injectable()
export class CarOptionsService {
  constructor(private readonly http: HttpClient) {}

  getCarOptions(id: string): Observable<CarOptions> {
    return this.http.get<CarOptionsResponseDTO>("/options/" + id).pipe(
      map((carModelResponseDto) => {
        return CarOptionsMapper.toModel(carModelResponseDto);
      })
    );
  }
}
