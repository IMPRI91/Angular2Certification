import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CarModel } from '../models/carmodel';
import { CarModelDTO } from '../dtos/carmodel-response.dto';
import { CarModelMapper } from './mappers/carmodel.mapper';

@Injectable()
export class CarConfigService {

  constructor(private readonly http: HttpClient){}

  getCarsModels(): Observable<CarModel[]>{
    return this.http.get<CarModelDTO[]>('/models').pipe(
      map((carModelResponseDto: CarModelDTO[]) =>
      carModelResponseDto.map(CarModelMapper.toModel))
 
    );
  }

    /*private valueSubject = new Subject<string>();
    value$ = this.valueSubject.asObservable();
  
    emitValue(value: string) {
      this.valueSubject.next(value);
    }*/
}