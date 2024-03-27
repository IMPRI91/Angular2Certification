import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { CarModel } from "../models/carmodel";

const CAR_KEY = 'model';

@Injectable()
export class CarConfigStorageService extends StorageService<CarModel[]>{
    constructor() {
        super(CAR_KEY);
    }

}