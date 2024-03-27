import {Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CarModel } from '../../models/carmodel';
import { CarConfigService } from '../../services/carconfig.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss'],
})
export class CarModelComponent implements OnInit{
  models: any[] = [1,2,3,4];
  colors: any[] = [];
  imageURL: string = 'https://interstate21.com/tesla-app/images/';
  selectedModel: string = 'default';
  selectedColor: string = 'black';
  selectedCarImage: string = '';
  carModels?: CarModel[];


  private valueSubject = new Subject<string>();
  value$ = this.valueSubject.asObservable();

  constructor(private readonly service: CarConfigService){}

  ngOnInit(): void {
    
    this.service.getCarsModels().subscribe(
      (carModels: CarModel[]) => {
        if(carModels){
          this.carModels = carModels;
        }
        
      }
    );
    
   }

    changeImage(){
      this.selectedCarImage = this.imageURL+''+this.selectedModel+'/'+ this.selectedColor+'.jpg';
      console.log('NEW IMAGE:'+ this.selectedCarImage);
      //this.emitValue();
    }



  selectModel(selectedModel: string){
    if(selectedModel){
      console.log("MODEL SELECTED");
    }
    
  }

}
