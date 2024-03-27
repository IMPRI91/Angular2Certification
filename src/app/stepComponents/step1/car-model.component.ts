import {Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CarModel, ColorModel } from '../../models/carmodel';
import { CarConfigService } from '../../services/carconfig.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss'],
})
export class CarModelComponent implements OnInit{
  imageURL: string = 'https://interstate21.com/tesla-app/images/';
  selectedModel: string = 'default';
  selectedColor: string = 'black';
  selectedCarImage: string = '';
  carModels?: CarModel[];
  carColors?: ColorModel[];

  constructor(private readonly service: CarConfigService){}

  ngOnInit(): void {
    console.log("ON INIT------------" );
    this.service.getCarsModels().subscribe(
      (carModels: CarModel[]) => {
          this.carModels = carModels;
          this.carColors = carModels[0].colors;
          console.log("CARMODEL" + this.carModels.length);        
      }
    );


    /*this.carModels = this.service.getCarsModels(); */
    
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
