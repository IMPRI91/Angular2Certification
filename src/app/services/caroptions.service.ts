import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CarOptionsMapper } from './mappers/caroptions.mapper';
import { CarOptionsResponseDTO } from '../dtos/caroptions-response.dto';
import { CarOptions } from '../models/caroptions';


@Injectable()
export class CarConfigService {

  constructor(private readonly http: HttpClient){}

  getCarOptions(id: string): Observable<CarOptions[]>{
    return this.http.get<CarOptionsResponseDTO>('/options/${id}').pipe(
      map((carModelResponseDto) =>{
        return [CarOptionsMapper.toModel(carModelResponseDto)];
      })
    );
  }

    /*private valueSubject = new Subject<string>();
    value$ = this.valueSubject.asObservable();
  
    emitValue(value: string) {
      this.valueSubject.next(value);
    }*/
}